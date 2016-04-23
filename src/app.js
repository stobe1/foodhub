'use strict';

var angular = require('angular');
require('angular-route');
var HTMLtemplate_profile = require('./views/profile.html');



var app = angular.module('Foodhub', [ 'ngRoute'])
.config(function ($locationProvider, $routeProvider) {

    $routeProvider
      .when('/profile', {
        template : HTMLtemplate_profile,
      })

      .when('/', {
        template : HTMLtemplate_profile,
      })

      .otherwise({
        redirectTo: '/profile'
      });
});



require('./components/button/button');
