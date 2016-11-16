const db = require('APP/db');
const router = require('express').Router();
module.exports = router;

// NOTE: /api/questions/...
// const Questions = db.models('Questions');

// NOTE: Get all the questions for specified quiz id.
router.get('/:quizId', (req, res, next) => {
  // Questions.findAll({
  //   where: {
  //     // quiz id equals: req.params.quizId
  //   }
  // })
  // .then(resp => res.json(resp.dataValues))
  // .catch(err => {
  //   console.error(err);
  //   console.log('Error in /api/questions/:quizId');
  // });
});

// NOTE: Add a question to the questions table.
router.post('/', (req, res, next) => {
  // const newQuestion = req.body.question;
  // Questions.create(newQuestion)
  // .then(resp => res.json(resp))
  // .catch(err => {
  //   console.error(err);
  //   console.log('Error in /api/question post');
  // });
});

// NOTE: This route gets all the questions from the questions table.
// I see no reason why we would ever use it, but it's here.
router.get('/' , (req, res, next) => {
  // Questions.findAll()
  // .then(all => {
  //   // NOTE: Just send back the dataValues.
  //   res.json(all.dataValues);
  // })
  // .catch(err => {
  //   console.error(err);
  //   console.log('Error in /api/lessons/ get');
  // });
});
