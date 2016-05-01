var passport = require('passport');
var facebook = require('../auth/facebook');

exports.loginFacebook = passport.authenticate('facebook');

exports.loginFacebookResult = function(req, res) {
  res.redirect('/api/v1/sessions');
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.status(200);
  });
};
