var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var config = require('../config/config');

passport.use(new Strategy({
 clientID: config.auth.facebook.id,
 clientSecret: config.auth.facebook.secret,
 callbackURL: config.auth.facebook.callback
},
  function(accessToken, refreshToken, profile, cb) {
   return cb(null, profile);
  }));
