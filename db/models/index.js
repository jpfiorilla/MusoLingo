'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Topic = require('./topic');
const Lesson = require('./lesson');
const Slide = require('./slide');
const Quiz = require('./quiz');
const Question = require('./question');
const User = require('./user');
const Challenge = require('./challenge');

//
Topic.hasMany(Lesson);
Lesson.belongsTo(Topic);

Lesson.hasMany(Slide);
Slide.belongsTo(Lesson);

Lesson.hasOne(Quiz);
Quiz.belongsTo(Lesson);

Quiz.hasMany(Question);
Question.belongsTo(Quiz);

module.exports = {User, Topic, Lesson, Slide, Quiz, Question, Challenge};
