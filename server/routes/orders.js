'use strict'

const epilogue = require('APP/server/epilogue');
const Bluebird = require('bluebird');

const db = require('APP/db');
const productModel = db.model('products');
const addressModel = db.model('addresses');
const userModel = db.model('users');
const creditCardModel = db.model('creditCards');
const orderModel = db.model('orders');
const lineItemModel = db.model('lineItems');
const cartProductModel = db.model('cartProducts');
const utils = require('APP/server/utils');

const customOrdersRoutes = require('express').Router() 
module.exports = customOrdersRoutes

const chance = require('chance')(Math.random);
const generateConfirmationNum = () => chance.string({
	pool:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
	length: 20
});

// // Epilogue will automatically create standard RESTful routes
// const orders = epilogue.resource({
// 	model: db.model('orders'),
// 	include: [
		// 	{ model: addressModel, as: 'shipping_address', required: false },
		// 	{ model: addressModel, as: 'billing_address', required: false },
		// 	{ model: creditCardModel, include:[{ model: userModel }], required: false },
		// 	{ model: userModel, required: false },
		// 	{ model: lineItemModel }
		// ],
// 	endpoints: ['/orders', '/orders/:id']
// });

customOrdersRoutes.get('/', (req,res,next) => {
	orderModel.findAll({
		include: [
			{model: lineItemModel, include: [{model: productModel, required: false}], required: false}
		],
		order: '"order_date" DESC',
		limit: 100
	})
	.then(result => res.send(result))
	.catch(err => console.log('could not fetch all orders', err));
})

customOrdersRoutes.get('/:id', (req,res,next) => {
	orderModel.findOne({
		where: {id: req.params.id},
		include: [{model: lineItemModel, include: [{model: productModel}]}]
	})
	.then(result => res.send(result))
	.catch(next);
})

// This was working!!
customOrdersRoutes.post('/', (req,res,next) => {
	orderModel.findOrCreate({
		where: { 
			confirmation_number: generateConfirmationNum(),
			user_id: req.session.userId
		},
		include: [
			{ model: addressModel, as: 'shipping_address', required: false },
			{ model: addressModel, as: 'billing_address', required: false },
			{ model: creditCardModel, include:[{ model: userModel }], required: false },
			{ model: userModel, required: false },
			{ model: lineItemModel }
		]})
	.spread(order => {
		return addressModel
			.findOrCreate({where: req.body.billing_address})
			.spread(addressInfo => order.setBilling_address(addressInfo))
			.catch(next)
	})
	.then(order => {
		return addressModel
			.findOrCreate({where: req.body.shipping_address})
			.spread(addressInfo => order.setShipping_address(addressInfo))
			.catch(next)
	})
	.then(order => {
		if (req.session.userId)
			req.body.credit_card.user_id = req.session.userId;
		return creditCardModel
			.findOrCreate({where: req.body.credit_card})
			.spread(creditCardInfo => order.setCreditCard(creditCardInfo))
			.catch(next)
	})
	.then(order => {
		return cartProductModel.getCartProducts(req.sessionID)
			.then(cartProducts => {
				return Bluebird.map(cartProducts, cartProduct => {
					lineItemModel.create({
						quantity: cartProduct.quantity,
						order_id: order.id,
						product_id: cartProduct.product_id,
						price: cartProduct.product.price
					})
					.then(() => {
						cartProductModel.destroy({where: {id: cartProduct.id}})
					})
					.catch(next)
				})
				.then(() => {
					// TODO: Refactor creation so that we can send richer confirmation email to the customer
					if (!process.env.SENDGRID_API_KEY) res.status(201).send(order);
					utils.sendEmail(
						process.env.EMAIL, 																		// sender
						req.body.email,																				// recipient
						`Order #${order.confirmation_number} Confirmation`,		// subject
						"Thank you for your order. It is currently being " +
						"processed and will ship to you shortly!",						// message
						(statusCode, err) => {
							if (err)
								return next(err);
							res.status(201).send(order);
						}
					);
				})
				.catch(next)
			})
			.catch(next)
	})
	.catch(next)
})







// failures
// customOrdersRoutes.post('/', (req,res,next) => {

// 	let newOrder = {}

// 	addressModel.findOrCreate({where: req.body.billing_address})
// 	.spread(address => newOrder.billing_address_id = address.id)
// 	.then(() => {
// 		return addressModel.findOrCreate({where: req.body.shipping_address})
// 		.spread(address => newOrder.shipping_address_id = address.id)
// 		.catch(next)
// 	})
// 	.then(() => {
// 		return creditCardModel.findOrCreate({where: req.body.creditCard})
// 		.spread(creditCard => newOrder.credit_card_id = creditCard.id)
// 		.catch(next)
// 	})
// 	.then(() => {
// 		cartProductModel.getCartProducts(req.sessionID)
// 		.then(cartProducts => {
// 			orderModel.create(newOrder)
// 			.then(createdOrder => {
// 				Bluebird.map(cartProducts, cartProduct => {
// 					lineItemModel.create({
// 						quantity: cartProduct.quantity,
// 						product_id: cartProduct.product_id,
// 						price: cartProduct.product.price
// 					})
// 					.then(createdLineItem => {
// 						createdLineItem.setOrder(createdOrder)
// 						cartProductModel.destroy({where: {id: createdLineItem.product_id}})
// 					})
// 					.catch(next)
// 				})
// 				.then(() => {
// 					orderModel.findOne({
// 						where: {
// 							id: createdOrder.id,
// 						},
// 						include: [
// 								{ model: addressModel, as: 'shipping_address', required: false },
// 								{ model: addressModel, as: 'billing_address', required: false },
// 								{ model: creditCardModel, include:[{ model: userModel }], required: false },
// 								{ model: userModel, required: false },
// 								{ model: lineItemModel }
// 							]
// 					})
// 					.then(order => res.send(order))
// 					.catch(next)
// 				})
// 				.catch(next)
// 			})
// 		})
// 	})
// 	.catch(next)
// })





// customOrdersRoutes.post('/', (req,res,next) => {

// 	let newOrder = {}

// 	addressModel.findOrCreate({where: req.body.billing_address})
// 	.spread(address => {
// 		newOrder.billing_address_id = address.id
// 		return addressModel.findOrCreate({where: req.body.shipping_address})
// 			.spread(address => {
// 				newOrder.shipping_address_id = address.id
// 				return creditCardModel.findOrCreate({where: req.body.creditCard})
// 					.spread(creditCard => {
// 						newOrder.credit_card_id = creditCard.id
// 						return orderModel.createAndGetAssociation(newOrder)
// 						.then(order => {
// 							return cartProductModel.getCartProducts(req.sessionID)
// 								.then(cartProducts => {
// 									Bluebird.map(cartProducts, cartProduct => {
// 										lineItemModel.create({
// 											quantity: cartProduct.quantity,
// 											order_id: order.id,
// 											product_id: cartProduct.product_id,
// 											price: cartProduct.product.price
// 										})
// 										.then(() => {
// 											cartProductModel.destroy({where: {id: cartProduct.id}})
// 										})

// 										.catch(next)
// 									})
// 									.then(() => res.status(201).send(order))
// 									.catch(next)
// 								})
								
// 								.catch(next)
// 							})
// 							.catch(next)
// 					})
// 					.catch(next)
// 			})
// 			.catch(next)
// 	})
// 	.catch(next)
// })


