var passport = require('passport');
var facebook = require('../auth/facebook');

exports.loginFacebook = passport.authenticate('facebook');

exports.loginFacebookResult = function(req, res) {
  res.redirect('/api/v1/users');
}

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/api/v1/login');
  });
}
