var errors = require('../errors/errors');
var db = require('../db');
var User = db.import('../models/User');

var queryOptions = {
  attributes: { exclude: ['token', 'tokenExpiresAt', 'createdAt', 'updatedAt'] }
}

exports.index = function(request, response, next) {
  User.all(queryOptions).then(function(users){
    response.status(200).json({ users: users });
  });  
}

exports.show = function(request, response, next) {
  if (isNaN(Number(request.params.id))) {
    return next(new errors.badRequest('User ID is invalid'));
  };
  User.findById(request.params.id, queryOptions).then(function(user) {
    if (user) {
      response.status(200).json(user);
    } else {
      return next(new errors.notFound('User not found'));
    }      
  });
}

exports.update = function(request, response, next) {
  if (isNaN(Number(request.body.id))) {
    return next(new errors.badRequest('User ID is invalid or missing'));
  };
  if (request.user.id !== Number(request.body.id)) {
    return next(new errors.forbidden('You are not allowed to update this user'));
  };
  User.findById(request.body.id, queryOptions).then(function(user) {
    if (!user) {
      return next(new errors.notFound('User not found'));
    }
    user.updateAttributes({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      phone: request.body.phone,
      paymentOption: request.body.paymentOption,
      address: request.body.address,
      avatarUrl: request.body.avatarUrl
    });
    user.save().then(function(user){
      response.status(200).json(user);
    }).catch(function(error){
      return next(new errors.badRequest(error.message));
    });
  });
}
