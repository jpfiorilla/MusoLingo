'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Slide = db.define('slides', {
  title: Sequelize.STRING,
  number: Sequelize.INTEGER,
  slideContent: Sequelize.ARRAY(Sequelize.JSON)
})

module.exports = Slide;
