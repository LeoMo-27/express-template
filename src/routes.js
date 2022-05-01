const express = require('express');

const index = require('./routes/index');
const users = require('./routes/api/v1/users.routes');

const app = express();

app.use('/', index);
app.use('/users', users);

module.exports = app;
