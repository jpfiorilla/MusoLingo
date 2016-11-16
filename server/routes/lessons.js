const db = require('APP/db');
const router = require('express').Router();
module.exports = router;

// NOTE: '/api/lessons/...'
const Lessons = db.models('Lessons');

// NOTE: Get a lesson by a specific id.
router.get('/:id', (req, res, next) => {
  Lessons.findOne(where: {
    id: req.params.id
  })
  .then(resp => res.json(resp.dataValues))
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons/:id');
  });
});

// NOTE: Add a lesson to the lessons table.
router.post('/', (req, res, next) => {
  const newLesson = req.body.lesson;
  Lessons.create(newLesson)
  .then(resp => res.json(resp))
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons post');
  });
});

// NOTE: This route gets all the lessons from the lessons table.
router.get('/' , (req, res, next) => {
  Lessons.findAll()
  .then(all => {
    // NOTE: Just send back the dataValues.
    res.json(all.dataValues);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons/ get');
  });
});
