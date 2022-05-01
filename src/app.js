/* eslint no-console: "off" */
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});
