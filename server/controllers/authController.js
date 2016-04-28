var passport = require('passport');
var facebook = require('../lib/authFacebook');

exports.loginFacebook = function(req, res) {
  passport.authenticate('facebook');
}

exports.loginFacebookResult = function(req, res) {
  passport.authenticate('facebook', {
      failureRedirect: '/api/v1/login'
    }),
    function(req, res) {
      res.redirect('/api/v1');
    }
}

exports.logout = function(req, res) {
  request.session.destroy(function(err) {
    response.redirect('/api/v1/login');
  });
}
