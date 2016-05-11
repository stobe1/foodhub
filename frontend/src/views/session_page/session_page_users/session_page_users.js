var _ = require('lodash');

angular.module('Foodhub')
  .controller('SessionPageUsersController', ['$scope', '$rootScope', '$location', '$routeParams', 'Sessions', '$filter', 'Orders', 
  function($scope, $rootScope, $location, $routeParams, Sessions, $filter, Orders) {
    $scope.sessionInfoTitle = 'Просмотр сессии';
    if (!$routeParams.id || isNaN(Number($routeParams.id))) {
      $location.path('/');
    }

    $scope.isSessionCreator = function(session) {
      if (!$rootScope.currentUser) return false;
      return $rootScope.currentUser.id === session.owner.id;
    }

    $scope.isOrderCreator = function(order) {
      if (!$rootScope.currentUser) return false;
      return $rootScope.currentUser.id === order.owner.id;
    }

    $scope.saveOrder = function(order) {
      var orderParams = {
        id: order.id,
        isPaid: order.isPaid,
        foodOrders: _.map(order.foodOrders, function(foodOrder) { return { foodId: foodOrder.food.id, quantity: foodOrder.quantity } })
      }
      Orders.updateOrder(orderParams).then(function(order) {
        $scope.session.orders[_.map($scope.session.orders, 'id').indexOf(order.id)] = order;
      });
    }

    $scope.deleteOrder = function(order) {
      Orders.destroyOrder({ id: order.id }).then(function(order) {
        $scope.session.orders = _.reject($scope.session.orders, { id: order.id });
      });      
    }

    $scope.init = function() {
      $rootScope.getShops().then(function(shops) {
        $scope.shops = shops;
        return Sessions.getSession({ id: $routeParams.id });
      }).then(function(session) {
        if (!session) {
          $location.path('/');
        } else {
          $scope.session = session;
          $scope.session.orderTime = $filter('timeFilter')(new Date($scope.session.orderTime));
          $scope.session.deliveryTime = $filter('timeFilter')(new Date($scope.session.deliveryTime));
          $rootScope.$broadcast('initSessionInfo');
        }
      });
    };

    $scope.init();
  }]);
