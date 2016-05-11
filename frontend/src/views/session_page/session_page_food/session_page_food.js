angular.module('Foodhub')
  .controller('SessionPageFoodController', ['$scope', '$rootScope', '$location', 'Shops', 'Sessions', 'Orders', '$filter', 
  function($scope, $rootScope, $location, Shops, Sessions, Orders, $filter) {
    $scope.listFoodOrders = [];
    $scope.order = {
      sessionId: 1,
      foodOrders: []
    };

    $scope.getNewSession = function() {
      var date = new Date();
      date.setTime(date.getTime() + 1000 * 60 * 60);
      return {
        shopId: $scope.shops[0].id,
        orderTime: $filter('timeFilter')(date),
        deliveryTime: null,
        address: '',
        price: 0,
        orders: []
      }
    }

    $scope.init = function() {
      $rootScope.getShops().then(function(shops) {
        $scope.shops = shops;
        if ($rootScope.session) {
          // to be implemented
        } else {
          $scope.isNewSession = true;
          $scope.session = $scope.getNewSession();
          $scope.sessionInfoTitle = "Создание сессии";
        }
        $scope.order.sessionId = $scope.session.id;
        $scope.session.orders.push($scope.order);
        $rootScope.$broadcast('initSessionInfo');
        return Shops.getShop({ id: $scope.session.shopId });
      }).then(function(shop) {
        $scope.selectedShop = shop;
      });
    };

    $scope.addFoodToCart = function(food, quantity) {
      $scope.order.foodOrders.push({
        foodId: food.id,
        quantity: quantity,
        price: food.price * quantity,
        name: food.name,
        imageUrl: food.imageUrl
      });
    }

    $scope.saveOrder = function(order) {
      if ($scope.isNewSession) {
        var date = new Date();
        var timeParts = /(\d{1,2}):(\d{1,2})/.exec($scope.session.orderTime);
        date.setHours(timeParts[1]);
        date.setMinutes(timeParts[2]);
        var sessionParams = {
          shopId: $scope.session.shopId,
          orderTime: date.toISOString(),
          address: $scope.session.address
        }
        Sessions.createSession(sessionParams).then(function(session) {
          $rootScope.session = session;
          var orderParams = {
            sessionId: session.id,
            foodOrders: _.map($scope.order.foodOrders, function(foodOrder) {return {foodId: foodOrder.foodId, quantity: foodOrder.quantity}})
          }
          return Orders.createOrder(orderParams);
        }).then(function(order) {
          $rootScope.session.orders.push(order);
          $location.path('/session');
        });
      } else {
        // to be implemented
      }
    }

    $scope.init();
  }]);
