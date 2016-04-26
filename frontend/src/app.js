'use strict';

var angular = require('angular');
require('angular-route');
var profilePageTemplate = require('./views/user_page/user_page.html');
var orderPageTemplate = require('./views/last_page/last_page.html');
var sessionPageFoodTemplate = require('./views/session_page/session_page_food/session_page_food.html');
var sessionPageUsersTemplate = require('./views/session_page/session_page_users/session_page_users.html');
var sessionListsPageTemplate = require('./views/session_list_page/session_list_page.html');
var componentsPageTemplate = require('./views/components/components.html');

function appConfig($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      template : sessionListsPageTemplate,
    })

    .when('/profile', {
      template : profilePageTemplate,
    })

    .when('/order', {
      template : orderPageTemplate,
    })

    .when('/food', {
      template : sessionPageFoodTemplate,
    })

    .when('/session', {
      template : sessionPageUsersTemplate,
    })

    .when('/components', {
      template : componentsPageTemplate,
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
