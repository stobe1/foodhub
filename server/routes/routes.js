var express = require('express');
var app = express();
var router = express.Router();
var authController = require('../controllers/authController');
var usersController = require('../controllers/usersController');
var shopsController = require('../controllers/shopsController');
var sessionsController = require('../controllers/sessionsController');
var odersController = require('../controllers/odersController');

//Authentication//
router.post('/api/v1/login', function(request, response) { authController.login(request, response) });
router.post('/api/v1/logout', function(request, response) { authController.logout(request, response) });

//Users//
router.get('/api/v1/users', function(request, response) { usersController.index(request, response) });
router.get('/api/v1/users/:id', function(request, response) { usersController.show(request, response) });
router.put('/api/v1/users', function(request, response) { usersController.update(request, response) });

//Shops//
router.get('/api/v1/shops', function(request, response) { shopsController.index(request, response) });
router.get('/api/v1/shops/:id', function(request, response) { shopsController.show(request, response) });

//Sessions//
router.get('/api/v1/sessions', function(request, response) { sessionsController.index(request, response) });
router.get('/api/v1/sessions/:id', function(request, response) { sessionsController.show(request, response) });
router.post('/api/v1/sessions', function(request, response) { sessionsController.create(request, response) });
router.put('/api/v1/sessions', function(request, response) { sessionsController.update(request, response) });

//Orders//
router.post('/api/v1/orders', function(request, response) { odersController.index(request, response) });
router.put('/api/v1/orders', function(request, response) { odersController.update(request, response) });
router.delete('/api/v1/orders', function(request, response) { odersController.delete(request, response) });

exports.router = router;
