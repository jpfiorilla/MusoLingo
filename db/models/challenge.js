'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

// notes is for Tone.Sequence notes, vexNotes is for vexFlow to render visual notes + staff
const Challenge = db.define('challenges', {
	title: { type: Sequelize.STRING },
	bpm: { type: Sequelize.INTEGER, allowNull: false },
	notes: { type: Sequelize.ARRAY(Sequelize.STRING) },
  vexNotes: { type: Sequelize.ARRAY(Sequelize.JSON) }
})


module.exports = Challenge;
