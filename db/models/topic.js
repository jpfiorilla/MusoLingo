'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Topic = db.define('topics', {
	name: { type: Sequelize.STRING, allowNull: false }
})


module.exports = Topic;
