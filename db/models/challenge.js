'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

// notes is for Tone.Sequence notes, vexNotes is for vexFlow to render visual notes + staff
// unsure if array data types are correct
const Challenge = db.define('challenges', {
	bpm: { type: Sequelize.INTEGER, allowNull: false },
	notes: { type: Sequelize.ARRAY(Sequelize.STRING) },
  vexNotes: { type: Sequelize.ARRAY(Sequelize.JSON) }
})


module.exports = Challenge;
