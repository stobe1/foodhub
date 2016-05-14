var passport = require('passport');
var facebook = require('../auth/facebook');
var _ = require('lodash');

exports.loginFacebook = passport.authenticate('facebook');

exports.loginFacebookResult = function(req, res) {
  var attributes = ['id', 'firstName', 'lastName', 'email', 'phone', 'paymentOption', 'address', 'avatarUrl', 'registrationService', 'externalUserId'];
  var user = JSON.stringify(_.pick(req.user, attributes));
  res.cookie('currentUser', user);
  res.redirect('/#/sessions');
};

exports.logout = function(req, res, next) {
  req.session.destroy(function(err) {
    res.status(200);
  })
};
