const db = require('APP/db');
const router = require('express').Router();
module.exports = router;

// NOTE: '/api/lessons/...'
const lessons = db.model('lessons');

// NOTE: Get all lessons for a specific topic id.
router.get('/topic/:id', (req, res, next) => {
  lessons.findAll({
    where: {
      topic_id: req.params.id
    }
  })
  .then(resp => res.json(resp.dataValues))
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons/:id');
  });
});

// NOTE: Get a lesson by id.
router.get('/:id', (req, res, next) => {
  lessons.findOne({
    where: {
      id: req.params.id
    }
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
  lessons.create(newLesson)
  .then(resp => res.json(resp))
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons post');
  });
});

// NOTE: This route gets all the lessons from the lessons table.
router.get('/' , (req, res, next) => {
  lessons.findAll()
  .then(resp => {
    // NOTE: Just send back the dataValues.
    if (! resp) {
      res.send(404);
    } else {
      res.json(resp.dataValues);
    }
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons/ get');
  });
});
