const express = require('express');

const index = require('./controllers/index');

const app = express();

app.use('/', index);

module.exports = app;
