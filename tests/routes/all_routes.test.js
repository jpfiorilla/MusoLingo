'use strict'

import app from 'APP/server/api';
import Promise from 'bluebird';
import supertest from 'supertest';
import fs from 'fs';

const expect = 'chai'.expect;
const agent = supertest.agent(app);
const db = require('APP/db');

describe('Routes', () => {
	before('wait for the db', (done) => {
		db.didSync
		.then(() => done())
		.catch(done);
	});

	after('clear db', () => db.didSync)

	describe('Lessons', () => {
		it('gets all lessons', function (done) {
			agent
			.get('/lessons/all')
			.expect(200, done);
		});

	});
});
