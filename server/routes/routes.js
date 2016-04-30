var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');
var usersController = require('../controllers/usersController');
var shopsController = require('../controllers/shopsController');
var sessionsController = require('../controllers/sessionsController');
var ordersController = require('../controllers/ordersController');
var passport = require('passport');
var isLogin = require('../middleware/isLogin');

//Authentication//
router.get('/login/facebook', authController.loginFacebook);
router.get('/login/facebook/return',
  passport.authenticate('facebook', {
    failureRedirect: '/api/v1/users'
  }),
  authController.loginFacebookResult);
router.get('/logout', isLogin, authController.logout);

//Users//
router.get('/users', isLogin, usersController.index);
router.get('/users/:id',isLogin, usersController.show);
router.put('/users', isLogin, usersController.update);

//Shops//
router.get('/shops', isLogin, shopsController.index);
router.get('/shops/:id', isLogin, shopsController.show);

//Sessions//
router.get('/sessions', isLogin, sessionsController.index);
router.get('/sessions/:id', isLogin, sessionsController.show);
router.post('/sessions', isLogin, sessionsController.create);
router.put('/sessions', isLogin, sessionsController.update);

//Orders//

router.post('/orders', isLogin, ordersController.create);
router.put('/orders', isLogin, ordersController.update);
router.delete('/orders', isLogin, ordersController.delete);

exports.router = router;
