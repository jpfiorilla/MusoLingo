const db = require('APP/db');
const router = require('express').Router();
module.exports = router;

// NOTE: all routes are prepended with: '/api/lessons/...'

const lessons = db.model('lessons');

// NOTE: Get all lessons for a level.
router.get('/level/:level', (req, res, next) => {
  lessons.findAll({
    where: {
      level: req.params.level
    }
  })
  .then(resp => {
    if (! resp) res.send(404);
    else res.json(resp.dataValues);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /level/:level get');
  });
});

// NOTE: Get all lessons for a topic id.
router.get('/topic/:id', (req, res, next) => {
  lessons.findAll({
    where: {
      topic_id: req.params.id
    }
  })
  .then(resp => {
    if (! resp) res.send(404);
    else res.json(resp.dataValues)
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons/:id');
  });
});

// NOTE: Get a lesson by title.
router.get('/:title', (req, res, next) => {
  lessons.findOne({
    where: {
      title: req.params.title
    }
  })
  .then(resp => {
    if (! resp) res.send(404);
    else res.json(resp.dataValues)
  })
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
  .then(resp => {
    if (! resp) res.send(404);
    else res.json(resp.dataValues)
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons/:id');
  });
});

// NOTE: Get all lessons from the table.
router.get('/' , (req, res, next) => {
  lessons.findAll()
  .then(resp => {
    // IDEA: Just send back the dataValues.
    if (! resp) res.send(404);
    else res.json(resp.dataValues);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons/ get');
  });
});

// NOTE: Add a lesson to the lessons table.
router.post('/', (req, res, next) => {
  const newLesson = req.body.lesson;
  lessons.create(newLesson)
  .then(resp => {
    if (! resp) res.send(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /api/lessons post');
  });
});
