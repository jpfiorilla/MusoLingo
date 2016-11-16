'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Quiz = db.define('quizzes', {
  title: Sequelize.STRING,
  number: Sequelize.INTEGER,
  lessontext: Sequelize.TEXT,
  image: Sequelize.TEXT,
  images: Sequelize.ARRAY(Sequelize.TEXT)
})


module.exports = Quiz;
