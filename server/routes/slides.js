const db = require('APP/db');
const router = require('express').Router();
const Slides = db.model('slides');
module.exports = router;

// NOTE: All routes prepended with: /api/slides/

// get one slide by: id, title, number,
// get all slides by: lesson_id

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get a slide by id
router.get('/id/:id', (req, res, next) => {
  return findOneInSlides(res, 'id', req.params.id);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get a slide by title
router.get('/title/:title', (req, res, next) => {
  return findOneInSlides(res, 'title', req.params.title);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get a slide by number
router.get('/number/:nuber', (req, res, next) => {
  return findOneInSlides(res, 'number', req.params.number);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: get all slides by lesson_id
router.get('/lesson_id/:lesson_id', (req, res, next) => {
  return findAllInSlides(res, 'lesson_id', req.params.lesson_id);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
function findOneInSlides(res, attribute, match) {
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
  return Slides.findOne(x)
  .then(resp => {
    if (! resp) res.sendStatus(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in findOneInSlides');
    res.end();
  });
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
function findAllInSlides(res, attribute, match) {
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
  return Slides.findAll(x)
  .then(resp => {
    if (! resp.length) res.send(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in findAllInSlides');
    res.end();
  });
}
