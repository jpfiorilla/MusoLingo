const db = require('APP/db');


const Topic = require('./models/topic');
const Lesson = require('./models/lesson');
const Slide = require('./models/slide');
const Quiz = require('./models/quiz');
const Question = require('./models/question');
const User = require('./models/user');

const generateLessons = function(){
	var lessons = [];
	lessons.push(Lesson.create({
		title: 'Intro to rhythm',
		level: 0,
		description: 'Learn how to read rhythmic symbols'
	})
	.then(createdLesson => {
		return createdLesson.setTopic(1)
	}));

	return Promise.all(lessons);
}

const generateTopics = () => {
	var topics = [];
	topics.push(Topic.create({
		name: 'Intro to reading music'
	}));
	return Promise.all(topics);
}

const seed = () => {
	return generateTopics()
	.then(() => generateLessons())
	.catch(err => console.error(err));
}

db.didSync
	.then(() => db.sync({force: true}))
	.then(() => seed())
	.then(() => console.log(`Seeded OK`))
	.catch(error => console.error(error))
	.finally(() => db.close())
