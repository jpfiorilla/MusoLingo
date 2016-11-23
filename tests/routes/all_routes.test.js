'use strict'

import app from 'APP/server/start';
import Promise from 'bluebird';
import supertest from 'supertest';
import fs from 'fs';

const expect = 'chai'.expect;
const agent = supertest.agent(app);
const db = require('APP/db');

describe('Routes', () => {

	before('wait for the db', (done) => {
		db.didSync
		.then(() => {
			var x = db.model('topics').create({
				name: 'fake 1'
			});
			return Promise.all([x]);
		})
		.then(() => {
			var x = db.model('lessons').create({
				title: 'Hi',
				level: 1,
				description: 'Hi',
				topic_id: 1
			});
			return Promise.all([x]);
		})
		.then(() => done())
		.catch(done);
	});


	describe('Lessons', () => {
		it('gets all lessons', function (done) {
			agent
			.get('/api/lessons/all')
			.expect(200, done);
		});
		it('gets all by level', function (done) {
			agent
			.get('/api/lessons/level/1')
			.expect(200, done);
		});
		it('gets all by topic', function (done) {
			agent
			.get('/api/lessons/topic/1')
			.expect(200, done);
		});
	});

	after('clear db', () => db.didSync)
});
