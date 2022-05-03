const httpError = require('http-errors');

function errorHandler(err, req, res, next) {
  res.status(err.status || 500).send({
    message: err.message,
    error: err,
  });
}

function notFoundHandler(req, res, next) {
  console.log('err.status');
  next(httpError(404));
}

module.exports = {
  errorHandler,
  notFoundHandler,
}
