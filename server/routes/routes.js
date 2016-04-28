var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');
var usersController = require('../controllers/usersController');
var shopsController = require('../controllers/shopsController');
var sessionsController = require('../controllers/sessionsController');
var ordersController = require('../controllers/ordersController');

//Authentication//
router.get('/login/facebook', authController.loginFacebook);
router.get('/login/facebook/return', authController.loginFacebookResult);
router.post('/logout', authController.logout);

//Users//
router.get('/users', usersController.index);
router.get('/users/:id', usersController.show);
router.put('/users', usersController.update);

//Shops//
router.get('/shops', shopsController.index);
router.get('/shops/:id', shopsController.show);

//Sessions//
router.get('/sessions', sessionsController.index);
router.get('/sessions/:id', sessionsController.show);
router.post('/sessions', sessionsController.create);
router.put('/sessions', sessionsController.update);

//Orders//
router.post('/orders', ordersController.create);
router.put('/orders', ordersController.update);
router.delete('/orders', ordersController.delete);

exports.router = router;
