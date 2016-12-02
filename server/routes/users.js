'use strict'

const epilogue = require('APP/server/epilogue');
const db = require('APP/db');
const userModel = db.model('users');

const customUserRoutes = require('express').Router();

module.exports = customUserRoutes;

// // ----------------> '/users/' <-----------------------

customUserRoutes.get('/', (req,res,next) => {
	userModel.findAll()
	.then(result => res.send(result))
	.catch(next);
});

// how to set addresses & creditcard ?
customUserRoutes.post('/', (req,res,next) => {
	userModel.create(req.body)
	.then(result => res.send(result))
	.catch(next);
});

// // ----------------> '/users/:id' <---------------------

customUserRoutes.get('/:id', function(req, res, next){
	userModel.findOne({
		where: { id: req.params.id }
	})
	.then(result => res.send(result))
	.catch(next);
});

customUserRoutes.post('/:id', (req,res,next) => {

	userModel.findById(req.params.id)
	.then(result => result.update(req.body))
	.then(updated => {
		console.log('updated ', updated.dataValues.completed.quizzes);
		res.status(201).json(updated);
	})
	.catch(next);
});

customUserRoutes.delete('/:id', (req,res,next) => {
	userModel.findById(req.params.id)
	.then(result => result.destroy())
	.then(() => res.sendStatus(204))
	.catch(next);
});

customUserRoutes.post('/quizzes/score/:id', (req, res, next) => {
	userModel.findById(req.params.id)
	.then(user => {
		var quizzesScore = user.quizzesScore;
		if (Array.isArray(quizzesScore[req.body.quizId])) {
			quizzesScore[req.body.quizId].push(req.body.scores)
		}
		else {quizzesScore[req.body.quizId] = [req.body.scores]}
		return user.update({ quizzesScore })
	})
	.then(updatedUser => {console.log(updatedUser); res.send(updatedUser)})
})

customUserRoutes.post('/quizzes/:id', (req, res, next) => {
	userModel.findById(req.params.id)
	.then(user => user.update(
		{completedQuizzes: [...user.completedQuizzes, req.body.completedQuiz]}
	))
	.then(updatedUser => {console.log(updatedUser); res.send(updatedUser)})
})

customUserRoutes.post('/keys/:id', (req, res, next) => {
	userModel.findById(req.params.id)
	.then(user => user.update(
		{completed: {
			quizzes: user.completed.quizzes,
			lessons: user.completed.lessons,
			keys: user.completed.keys + req.body.keysToAdd
		}}
	))
	.then(updatedUser => {res.send(updatedUser)})
})

// // Epilogue will automatically create standard RESTful routes
// const users = epilogue.resource({
// 		model: db.model('users'),
// 		include: [
// 			{ model: addressModel, as: 'shipping_address', required: false },
// 			{ model: addressModel, as: 'billing_address', required: false },
// 			{ model: creditCardModel, required: false }
// 		],
// 		endpoints: ['/users', '/users/:id']
// })


// // -------------------------------------------------
// // ----------------> epilogue auth <----------------
// // -------------------------------------------------

// const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
// users.delete.auth(mustBeLoggedIn)
// users.delete.auth(selfOnly)
// users.list.auth(forbidden)
// users.read.auth(mustBeLoggedIn)
