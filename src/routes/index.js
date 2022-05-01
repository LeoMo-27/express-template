const express = require('express');


const users = require('./api/v1/users.routes');


const app = express();
const router = express.Router();


// Api v1 routes

router.use('/users', users);

app.use('/api/v1', router);

module.exports = app;
