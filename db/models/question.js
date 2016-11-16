'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Question = db.define('questions', {
    questiontext: Sequelize.TEXT,
    type: {
        type: Sequelize.ENUM,
        values: ['multichoice', 'stringanswer'],
        allowNull: false
    },
    rightchoice: Sequelize.TEXT,
    wrongchoices: Sequelize.ARRAY,
    explanation: Sequelize.TEXT,
    hints: Sequelize.ARRAY(Sequelize.TEXT),
    points: Sequelize.INTEGER
})


module.exports = Question;