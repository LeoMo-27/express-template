const express = require('express');

const app = express.Router();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;