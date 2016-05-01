var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');
var usersController = require('../controllers/usersController');
var shopsController = require('../controllers/shopsController');
var sessionsController = require('../controllers/sessionsController');
var ordersController = require('../controllers/ordersController');
var passport = require('passport');
var isAuthenticated = require('../middleware/isAuthenticated');

//Authentication//
router.get('/login/facebook', authController.loginFacebook);
router.get('/login/facebook/return',
  passport.authenticate('facebook', {
    failureRedirect: '/api/v1/users'
  }),
  authController.loginFacebookResult);
router.get('/logout', isAuthenticated, authController.logout);

//Users//
router.get('/users', isAuthenticated, usersController.index);
router.get('/users/:id',isAuthenticated, usersController.show);
router.put('/users', isAuthenticated, usersController.update);

//Shops//
router.get('/shops', isAuthenticated, shopsController.index);
router.get('/shops/:id', isAuthenticated, shopsController.show);

//Sessions//
router.get('/sessions', isAuthenticated, sessionsController.index);
router.get('/sessions/:id', isAuthenticated, sessionsController.show);
router.post('/sessions', isAuthenticated, sessionsController.create);
router.put('/sessions', isAuthenticated, sessionsController.update);

//Orders//

router.post('/orders', isAuthenticated, ordersController.create);
router.put('/orders', isAuthenticated, ordersController.update);
router.delete('/orders', isAuthenticated, ordersController.delete);

exports.router = router;
