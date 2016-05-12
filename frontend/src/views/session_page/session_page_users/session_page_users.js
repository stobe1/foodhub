var _ = require('lodash');

angular.module('Foodhub')
  .controller('SessionPageUsersController', ['$scope', '$rootScope', '$location', '$routeParams', 'Sessions', '$filter', 'Orders', 
  function($scope, $rootScope, $location, $routeParams, Sessions, $filter, Orders) {
    $scope.sessionInfoTitle = 'Просмотр сессии';
    if (!$routeParams.id || isNaN(Number($routeParams.id))) {
      $location.path('/');
    }

    $scope.isSessionCreator = function(session) {
      if (!$rootScope.currentUser || !session) return false;
      return $rootScope.currentUser.id === session.owner.id;
    }

    $scope.isSessionParticipant = function(session) {
      if (!$rootScope.currentUser || !session) return false;
      var index = _.map(session.orders, function(order) { return order.owner.id }).indexOf($rootScope.currentUser.id);
      return index !== -1 || $rootScope.currentUser.id === session.owner.id;
    }

    $scope.isOrderCreator = function(order) {
      if (!$rootScope.currentUser || !order) return false;
      return $rootScope.currentUser.id === order.owner.id;
    }

    $scope.getHeaderTitleLabel = function() {
      if (!$scope.session) return false;
      if ($scope.isSessionCreator($scope.session)) {
        return 'Список людей принявших мое предложение';
      } else {
        return 'Список людей принявших предложение ' + $scope.session.owner.firstName + ' ' + $scope.session.owner.lastName;
      }
    }

    $scope.getJoinButtonLabel = function() {
      if (!$scope.session) return false;
      if ($scope.isSessionCreator($scope.session)) {
        return 'Редактировать сессию';
      } else if ($scope.isSessionParticipant($scope.session)) {
        return 'Редактировать заказ';
      } else {
        return 'Присоедениться';
      }
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

    $scope.deleteSession = function(session) {
      Sessions.updateSession({ id: session.id, status: 2 }).then(function(session) {
        $location.path('/#/');
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
        $scope.session = session;
        $scope.session.orderTime = $filter('timeFilter')(new Date($scope.session.orderTime));
        $scope.session.deliveryTime = $scope.session.deliveryTime ? $filter('timeFilter')(new Date($scope.session.deliveryTime)) : null;
        $rootScope.$broadcast('initSessionInfo');
      });
    };

    $scope.init();
  }]);
