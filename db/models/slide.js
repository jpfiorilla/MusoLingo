'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Slide = db.define('slides', {
    title: Sequelize.STRING,
    number: Sequelize.INTEGER,
    lessontext: Sequelize.TEXT,
    image: Sequelize.TEXT,
	images: Sequelize.ARRAY(Sequelize.TEXT)
})


module.exports = Slide;