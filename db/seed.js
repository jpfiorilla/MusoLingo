const db = require('APP/db');

// NOTE: seed these two first since they rely on no other models.
const Topic = require('./models/topic');
const topicSeed = require('./Seed_Helper/Topic_Seed');
const User = require('./models/user');
const userSeed = require('./Seed_Helper/User_Seed');
const Challenge = require('./models/challenge');
const challengeSeed = require('./Seed_Helper/Challenge_Seed');

// NOTE: then seed:
const Lesson = require('./models/lesson');
const lessonSeed = require('./Seed_Helper/Lesson_Seed');

// NOTE: then seed:
const Slide = require('./models/slide');
const slideSeed = require('./Seed_Helper/Slide_Seed');
const Quiz = require('./models/quiz');
const quizSeed = require('./Seed_Helper/Quiz_Seed');

function Slide_Quiz_Seeder () {
	var array = [];
	array.push(Slide.bulkCreate(slideSeed));
	array.push(Quiz.bulkCreate(quizSeed));
	return Promise.all(array);
}
function Lesson_Seeder () {
	var seed = [];
	seed.push(Lesson.bulkCreate(lessonSeed));
	return Promise.all(seed);
}
function Topic_User_Seeder () {
	var wholeSeed = [];
	// Topic creator.
	wholeSeed.push(Topic.bulkCreate(topicSeed));
	// User creator.  We cannot use bulkCreate because the password digest -
	// hook does not support it and refactoring it may be more trouble than it's worth.
	userSeed.forEach(user => {
		wholeSeed.push(User.create(user));
	})
	challengeSeed.forEach(challenge => {
		wholeSeed.push(Challenge.create(challenge))
	})
	return Promise.all(wholeSeed);
}

db.didSync
.then(() => db.sync({force: true}))
.then(Topic_User_Seeder)
.then(Lesson_Seeder)
.then(Slide_Quiz_Seeder)
.then(() => console.log(`Seeded OK`))
.catch(error => console.error(error))
.finally(() => db.close());

module.exports = db;
