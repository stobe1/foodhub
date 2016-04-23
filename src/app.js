'use strict';
 
var angular = require('angular');

var app = angular.module('Foodhub', [ 'ngRoute']);*/

 .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
      })

      .otherwise({
        redirectTo: '/'
      });
});



require('./components/button/button');