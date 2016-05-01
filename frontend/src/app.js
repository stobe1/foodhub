'use strict';

var angular = require('angular');
require('angular-route');
require('angular-resource');

function appConfig($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      template : require('./views/session_list_page/session_list_page.html'),
      controller: 'SessionListPageController'
    })

    .when('/profile', {
      template : require('./views/user_page/user_page.html'),
      controller: 'UserPageController'
    })

    .when('/order', {
      template : require('./views/last_page/last_page.html'),
      controller: 'LastPageController'
    })

    .when('/food', {
      template : require('./views/session_page/session_page_food/session_page_food.html'),
      controller: 'SessionPageFoodController'
    })

    .when('/session', {
      template : require('./views/session_page/session_page_users/session_page_users.html'),
      controller: 'SessionPageUsersController'
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
    'ngRoute',
    'ngResource'
  ])
  .config(appConfig)
  .run(appRun);

require('./components/footer/footer');
require('./components/header/header');
require('./components/button/button');
require('./components/session_list/session_list');
require('./components/food_order/food_order');
require('./components/button/button');
require('./components/text_input/text_input');
require('./components/quantity-input/quantity-input');
require('./views/session_list_page/session_list_page');
require('./views/components/components');
require('./views/last_page/last_page');
require('./views/user_page/user_page');
require('./views/session_page/session_page_food/session_page_food');
require('./views/session_page/session_page_users/session_page_users');
require('./services/shops');
require('./services/users');
require('./services/orders');
require('./services/sessions');
require('./services/auth');
require('./filters/money_filter');
require('./services/API');
