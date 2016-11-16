'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Lesson = db.define('lessons', {
	title: { type: Sequelize.STRING, allowNull: false },
	level: { type: Sequelize.INTEGER },
    description: Sequelize.TEXT
})


module.exports = Lesson;