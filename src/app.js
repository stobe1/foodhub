'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('Foodhub', [ 'ngRoute'])
.config(function ($locationProvider, $routeProvider) {

    $routeProvider
      .when('/profile', {
        templateUrl: '/views/profile.html',
      })

      .when('/', {
        templateUrl: '/views/profile.html',
      })

      .otherwise({
        redirectTo: '/profile'
      });
});

require('./components/button/button');
