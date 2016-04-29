'use strict';

var angular = require('angular');
require('angular-route');

function appConfig($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      template : require('./views/session_list_page/session_list_page.html'),
      controller: 'SessionListPageController'
    })

    .when('/profile', {
      template : require('./views/user_page/user_page.html'),
    })

    .when('/order', {
      template : require('./views/last_page/last_page.html'),
    })

    .when('/food', {
      template : require('./views/session_page/session_page_food/session_page_food.html'),
    })

    .when('/session', {
      template : require('./views/session_page/session_page_users/session_page_users.html'),
    })

    .when('/components', {
      template : require('./views/components/components.html'),
      controller: 'ComponentsController'
    })

    .otherwise({
      redirectTo: '/'
    });
}

appConfig.$inject = ['$routeProvider', '$httpProvider'];

function appRun () {
  console.log("started!");
}

var app = angular
  .module('Foodhub', [
    'ngRoute'
  ])
  .config(appConfig)
  .run(appRun);

require('./components/footer/footer');
require('./components/header/header');
require('./components/button/button');
require('./components/session_list/session_list');
require('./components/food_order/food_order');
require('./views/session_list_page/session_list_page');
require('./views/components/components');
require('./components/quantity-input/quantity-input')
