var passport = require('passport');
var facebook = require('../lib/authFacebook');

exports.loginFacebook = passport.authenticate('facebook');

exports.loginFacebookResult = function(req, res) {
    res.redirect('/api/v1');
}

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/api/v1/login');
  });
}
