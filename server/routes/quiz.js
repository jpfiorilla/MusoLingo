const db = require('APP/db');
const router = require('express').Router();
const Quizzes = db.model('quizzes');
module.exports = router;

// NOTE: All routes prepended with: /api/quiz/

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get a quiz by id
router.get('/id/:id', (req, res, next) => {
  return findOneInQuizzes(res, 'id', req.params.id);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get a quiz by number
router.get('/number/:number', (req, res, next) => {
  return findOneInQuizzes(res, 'number', req.params.number);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get a quiz by title
router.get('/title/:title', (req, res, next) => {
  return findOneInQuizzes(res, 'title', req.params.title);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get all quizzes by a lesson_id
router.get('/lesson_id/:lesson_id', (req, res, next) => {
  return findAllInQuizzes(res, 'lesson_id', req.params.lesson_id);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get all quizzes
router.get('/all', (req, res, next) => {
  return findAllInQuizzes(res);
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
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
function findOneInQuizzes(res, attribute, match) {
  // NOTE: res is the server response.
  // NOTE: attribute is the table attribute we are querying.
  // It could be undefined if we want to get everything from the table.
  // NOTE: match is the criteria for that attribute.

  // For Example: {title: "Intro to rythm"}
  // attribute = 'title'; match = "Intro to rythm";

  // NOTE: x is the object we send along with the db query.
  var x = {};

  // NOTE: if an attribute is specified we add it to x.
  if (attribute) {
    x.where = {};
    x.where[attribute] = match;
  }

  // NOTE: return the db query promise.
  return Quizzes.findOne(x)
  .then(resp => {
    if (! resp) res.sendStatus(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in findOneInQuizzes');
    res.end();
  });
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
function findAllInQuizzes(res, attribute, match) {
  // NOTE: res is the server response.
  // NOTE: attribute is the table attribute we are querying.
  // It could be undefined if we want to get everything from the table.
  // NOTE: match is the criteria for that attribute.

  // For Example: {title: "Intro to rythm"}
  // attribute = 'title'; match = "Intro to rythm";

  // NOTE: x is the object we send along with the db query.
  var x = {};

  // NOTE: if an attribute is specified we add it to x.
  if (attribute) {
    x.where = {};
    x.where[attribute] = match;
  }

  // NOTE: return the db query promise.
  return Quizzes.findAll(x)
  .then(resp => {
    if (! resp.length) res.send(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in findAllInQuizzes');
    res.end();
  });
}
