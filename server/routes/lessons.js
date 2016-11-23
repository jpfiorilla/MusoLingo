const db = require('APP/db');
const router = require('express').Router();
const Lessons = db.model('lessons');
module.exports = router;

// NOTE: all routes are prepended with: '/api/lessons/...'

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: Get all lessons from the table.
router.get('/all' , (req, res, next) => {
  return findAllInLessons(res);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: Get all lessons for a level.
router.get('/level/:level', (req, res, next) => {
  return findAllInLessons(res, 'level', req.params.level);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: Get all lessons for a topic id.
router.get('/topic/:topic_id', (req, res, next) => {
  return findAllInLessons(res, 'topic_id', req.params.topic_id);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: Get a lesson by title.
router.get('/title/:title', (req, res, next) => {
  return findOneInLessons(res, 'title', req.params.title);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: Get a lesson by id.
router.get('/id/:id', (req, res, next) => {
  return findOneInLessons(res, 'id', req.params.id);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: Add a lesson to the lessons table.
router.post('/', (req, res, next) => {
  const newLesson = req.body.lesson;
  lessons.create(newLesson)
  .then(resp => {
    if (! resp) res.sendStatus(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons post');
  });
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
function findOneInLessons(res, attribute, match) {
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
  return Lessons.findOne(x)
  .then(resp => {
    if (! resp) res.sendStatus(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in findOneInLessons');
    res.end();
  });
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
function findAllInLessons(res, attribute, match) {
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
  return Lessons.findAll(x)
  .then(resp => {
    if (! resp.length) res.sendStatus(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in findAllInLessons');
    res.end();
  });
}
