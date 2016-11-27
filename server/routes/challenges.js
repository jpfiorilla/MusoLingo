const db = require('APP/db');
const router = require('express').Router();
const Challenges = db.model('challenges');
module.exports = router;

// NOTE: all routes are prepended with: '/api/challenges/...'

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: Get all challenges from the table.
router.get('/all', (req, res, next) => {
  return findAllInChallenges(res);
});

// NOTE: Get a challenge by id.
router.get('/:id', (req, res, next) => {
  console.log("HELLO YOU HIT THIS ROUTE!!!", req.params.id)
  return findOneInChallenges(res, 'id', req.params.id);
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
// NOTE: Add a challenge to the challenges table.
router.post('/', (req, res, next) => {
  const newChallenge = req.body.challenge;
  challenges.create(newChallenge)
  .then(resp => {
    if (! resp) res.sendStatus(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in /api/challenges post');
  });
});
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
function findOneInChallenges(res, attribute, match) {
  // NOTE: res is the server response.
  // NOTE: attribute is the table attribute we are querying.
  // It could be undefined if we want to get everything from the table.
  // NOTE: match is the criteria for that attribute.

  // For Example: {title: "Intro to rhythm"}
  // attribute = 'title'; match = "Intro to rhythm";

  // NOTE: x is the object we send along with the db query.
  var x = {};

  // NOTE: if an attribute is specified we add it to x.
  if (attribute) {
    x.where = {};
    x.where[attribute] = match;
  }

  // NOTE: return the db query promise.
  return Challenges.findOne(x)
  .then(resp => {
    if (! resp) res.sendStatus(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in findOneInChallenges');
    res.end();
  });
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
function findAllInChallenges(res, attribute, match) {
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
  return Challenges.findAll(x)
  .then(resp => {
    if (! resp.length) res.sendStatus(404);
    else res.json(resp);
  })
  .catch(err => {
    console.error(err);
    console.log('Error in findAllInChallenges');
    res.end();
  });
}
