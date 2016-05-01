var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var config = require('../config/config');
var db = require('../db');
var User = db.import('../models/User');
var init = require('./init');

passport.use(new Strategy({
    clientID: config.auth.facebook.id,
    clientSecret: config.auth.facebook.secret,
    callbackURL: config.auth.facebook.callback
  },
  function(accessToken, refreshToken, profile, cb) {
    User
      .findOrCreate({
        where: {
          externalUserId: profile.id
        },
        defaults: {
          firstName: profile.displayName,
          token: accessToken,
          registrationService: 0
        }
      })
      .spread(function(user, created){
        return cb(null, user);
      })
  }));

init();
