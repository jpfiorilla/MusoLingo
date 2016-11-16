const db = require('APP/db');
const router = require('express').Router();
module.exports = router;

// NOTE: '/api/lessons/...'

const Lessons = db.models('Lessons');

// NOTE:

// NOTE: Add a lesson to the lessons table.
router.post('/', (req, res, next) => {
  const newLesson = req.body.lesson;
  Lessons.create(newLesson)
  .then(resp => res.json(resp))
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons post');
  })
});

// NOTE: This route gets all the lessons from the lessons table.
router.get('/' , (req, res, next) => {
  Tables.findAll()
  .then(all => {
    // NOTE: Just send back the dataValues.
    res.json(all.dataValues);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons/ get');
  });
});
