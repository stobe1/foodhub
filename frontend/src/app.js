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

    .when('/order/:id', {
      template : require('./views/last_page/last_page.html'),
      controller: 'LastPageController'
    })

    .when('/food/:id', {
      template : require('./views/session_page/session_page_food/session_page_food.html'),
      controller: 'SessionPageFoodController'
    })

    .when('/session/:id', {
      template : require('./views/session_page/session_page_users/session_page_users.html'),
      controller: 'SessionPageUsersController'
    })

    .otherwise({
      redirectTo: '/'
    });
}

appConfig.$inject = ['$routeProvider', '$httpProvider'];

function appRun ($rootScope, Shops, $timeout) {
  $rootScope.getShops = function() {
    if ($rootScope.shops) {
      return $timeout(function() { return $rootScope.shops });
    } else {
      return Shops.getShops().then(function(response) {
        $rootScope.shops = response.shops;
        return response.shops;
      });
    }
  };
  $rootScope.currentUser = {
    id:1,
    firstName: "Гена",
    lastName: "Русецкий",
    email: "ant478@gmail.com",
    phone: "+375447092034",
    paymentOption: 0,
    address: "г. Минск, ул. Якуба Коласа, д. 8, кв. 35.",
    avatarUrl: "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg",
    registrationService: 1,
    externalUserId: 123456
  }
}

appRun.$inject = ['$rootScope', 'Shops', '$timeout'];

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
require('./components/user_card/user_card');
require('./components/button/button');
require('./components/text_input/text_input');
require('./components/cart/cart');
require('./components/quantity-input/quantity-input');
require('./components/product_card/product_card');
require('./components/menu_tabs/menu_tabs');
require('./components/session_info/session_info');
require('./views/session_list_page/session_list_page');
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
require('./filters/timeFilter');
require('./components/form/form');
