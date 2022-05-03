const httpError = require('http-errors');

function errorHandler(error, req, res, next) {
  res.status(error.status || 500).send({
    message: error.message,
    error,
  });
}

function notFoundHandler(req, res, next) {
  next(httpError(404));
}

module.exports = {
  errorHandler,
  notFoundHandler,
}
