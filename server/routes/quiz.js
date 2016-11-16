const db = require('APP/db');
const router = require('express').Router();
module.exports = router;

// NOTE: /api/quiz/...
const Quiz = db.models('Quiz');
const Question = db.models('Question');

// NOTE: get all questions for a specified quiz id.
router.get('/:quizId', (req, res, next) => {
  Question.findAll({
    where: {
      // quiz id: req.params.
    }
  })
});
