'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Quiz = db.define('quizzes', {
  title: Sequelize.STRING,
  question_types: Sequelize.ARRAY(Sequelize.TEXT)
})

module.exports = Quiz;
