var listFoodOrders = require('../../fixtures/listFoodOrders');
var session = require('../../fixtures/sessionFull');
var shops = require('../../fixtures/shops');


angular.module('Foodhub')
  .controller('LastPageController', ['$scope', '$routeParams', '$rootScope', 'Orders', 'Sessions', 'Shops', 'Users', function($scope, $routeParams, $rootScope, Orders, Sessions, Shops, Users) {
    $scope.listFoodOrders = listFoodOrders;
    $scope.shops = shops;
    console.log(shops);
    $scope.session = session;
    console.log(session);
    $scope.sessionInfoTitle = "Информация о заказе";

    $scope.initial = function() {
      $rootScope.getShops().then(function(shops) {
        console.log(shops);
        $scope.shops = shops;
        return Sessions.getSession({ id: $routeParams.id });
      }).then(function(responce) {
        console.log(session);
        $scope.session = session;
      });
    };
    $scope.initial();
  }]);
