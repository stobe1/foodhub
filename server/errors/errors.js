exports.badRequest = function(message) {
  this.message = message || 'Request params are incorrect';
  this.status = 400;
  this.stack = new Error().stack;
};

exports.unauthorized = function(message) {
  this.message = message || 'Unauthorized';
  this.status = 401;
  this.stack = new Error().stack;
};

exports.forbidden = function(message) {
  this.message = message || 'Forbidden';
  this.status = 403;
  this.stack = new Error().stack;
};

exports.notFound = function(message) {
  this.message = message || 'Resource not found';
  this.status = 404;
  this.stack = new Error().stack;
};

exports.internal = function(message) {
  this.message = message || 'Internal Server Error';
  this.status = 500;
  this.stack = new Error().stack;
};

exports.handler = function(err, req, res, next) {
  var error = {
    code: err.status || 500,
    message: err.message,
  };
  if (process.env.NODE_ENV !== 'production') {
    error.stacktrace = err.stack.split(/\n */)
  };
  res.status(err.status || 500).json(error);
};
