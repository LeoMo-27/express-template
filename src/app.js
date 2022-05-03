/* eslint no-console: "off" */
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const routes = require('./routes/index');
const db = require('./models');
const { errorHandler, notFoundHandler } = require('./middlewares/errors/errorHandler');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);

app.use(errorHandler);
app.use(notFoundHandler);

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(PORT, (err) => {
      if (err) {
        return console.error('Failed', err);
      }
      console.log(`Listening on port ${PORT}`);
      return app;
    });
  })
  .catch((error) => console.error('Unable to connect to the database:', error));
