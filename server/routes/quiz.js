const db = require('APP/db');
const router = require('express').Router();
const Quizzes = db.model('quizzes');
module.exports = router;

// NOTE: All routes prepended with: /api/quiz/

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get quiz by id
router.get('/:id', (req, res, next) => {
  Quizzes.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(resp => {
    if (! resp) res.send(404);
    else res.json(resp.datavalues);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /:id get');
  });
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get quiz by number
router.get('/:number', (req, res, next) => {
  Quizzes.findOne({
    where: {
      number: req.params.number
    }
  })
  .then(resp => {
    if (! resp) res.send(404);
    else res.json(resp.datavalues);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /:number get');
  });
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get quiz by title
router.get('/:title', (req, res, next) => {
  Quizzes.findOne({
    where: {
      title: req.paramms.title
    }
  })
  .then(resp => {
    if (! resp) res.send(404);
    else res.json(resp.datavalues);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /:title get');
  });
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get quiz by lesson_id
router.get('/:lesson_id', (req, res, next) => {
  Quizzes.findOne({
    where: {
      lesson_id: req.params.lesson_id
    }
  })
  .then(resp => {
    if (! resp) res.send(404);
    else res.json(resp.datavalues);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /:lesson_id get');
  });
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: create a quiz.
router.post('/', (req, res, next) => {
  const newQuiz = req.body.quiz;
  Quizzes.create(newQuiz)
  .then(resp => {
    res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error / post request.');
  })
});
