var errors = require('../errors/errors');
var models = require('../models/models');
var _ = require('lodash');

var queryOptions = {
  attributes: { exclude: ['token', 'tokenExpiresAt', 'createdAt', 'updatedAt'] }
}
var updatedFields = ['firstName', 'lastName', 'email', 'phone', 'paymentOption', 'address', 'avatarUrl'];

exports.index = function(request, response, next) {
  models.User.all(queryOptions).then(function(users) {
    response.status(200).json({ users: users });
  });
}

exports.show = function(request, response, next) {
  models.User.findById(request.params.id, queryOptions).then(function(user) {
    if (user) {
      response.status(200).json(user);
    } else {
      return next(new errors.notFound('User not found'));
    }
  });
}

exports.update = function(request, response, next) {
  models.User.findById(request.body.id, queryOptions).then(function(user) {
    if (!user) {
      return next(new errors.notFound('User not found'));
    } else {
      return user;
    }    
  }).then(function(user) {
    user.updateAttributes(_.pick(request.body, updatedFields));
    return user.save();
  }).then(function(user) {
    response.status(200).json(user);
  }).catch(function(error) {
    return next(new errors.badRequest(error.message));
  });;
}
