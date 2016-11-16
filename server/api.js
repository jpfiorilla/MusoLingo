'use strict'

const db = require('APP/db');
const api = module.exports = require('express').Router();

api.get('/heartbeat', (req, res) => res.send({ok: true,}));
api.use('/auth', require('./auth'));

api.use('/users', require('./routes/users'));
api.use('/auth', require('./routes/auth'));

// Send along any errors
api.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
