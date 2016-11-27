const db = require('APP/db');
const userModel = db.model('users');

const router = require('express').Router();

module.exports = router;

// --------------------> '/auth/' <-----------------------

// Sign up for JustHome and create a new user
router.post('/signup', (req, res, next) => {
	userModel.create({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    image: req.body.image,
    password: req.body.password
  })
    .then(user => {
      return userModel.getUserAccount(user.id)
    })
    .then(userAccount => {
      req.session.user = userAccount;
      res.status(201).send(userAccount)})
		.catch(next);
});

// Login to an existing account
router.post('/login', (req, res, next) => {
	userModel.findOne({
    where: { email: req.body.email }
  })
		.then(user => {
      // Check if input email not found
      if (!user) {
        let error = new Error('User not found');
        error.status = 401;
        return next(error)
      }

      // Check if input password matches
      return user.authenticate(req.body.password)
        .then(valid => {
          if (!valid){
            let error = new Error('Incorrect password');
            error.status = 401;
            return next(error)
          }
          return userModel.getUserAccount(user.id)
        })
        .then(userAccount => {
          req.session.user = userAccount;
          res.send(userAccount)
        })
    })
		.catch(next);
});

// Logout of your current session
router.delete('/logout', (req, res, next) => {
  req.session.user = null;
  res.sendStatus(204);
});

// Reestablish account on front end
router.get('/me', (req, res, next) => {
  // console.log(req);
  userModel.getUserAccount(req.session.user.id)
  .then(userAccount => res.send(userAccount))
  .catch(next)
});
