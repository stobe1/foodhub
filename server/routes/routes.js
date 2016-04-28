var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');
var usersController = require('../controllers/usersController');
var shopsController = require('../controllers/shopsController');
var sessionsController = require('../controllers/sessionsController');
var odersController = require('../controllers/odersController');

//Authentication//
router.post('/login', authController.login);
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
router.post('/orders', odersController.index);
router.put('/orders', odersController.update);
router.delete('/orders', odersController.delete);

exports.router = router;
