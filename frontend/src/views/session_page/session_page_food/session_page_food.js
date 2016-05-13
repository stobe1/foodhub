var _ = require('lodash');
var moment = require('moment/min/moment-with-locales.js');
moment.locale('ru');

angular.module('Foodhub')
  .controller('SessionPageFoodController', ['$scope', '$rootScope', '$location', 'Shops', 'Sessions', 'Orders', '$routeParams', '$timeout',
  function($scope, $rootScope, $location, Shops, Sessions, Orders, $routeParams, $timeout) {
    if ((!$routeParams.id || isNaN(Number($routeParams.id))) && !$routeParams.id === 'new') {
      $location.path('/');
    }

    $scope.isSessionCreator = function(session) {
      if (!$rootScope.currentUser || !session) return false;
      return $rootScope.currentUser.id === session.owner.id;
    }

    $scope.getNewSession = function() {
      var date = new Date();
      return {
        shopId: $scope.shops[0].id,
        orderTime: moment(date).format('LT'),
        deliveryTime: null,
        address: '',
        price: 0,
        orders: [],
        owner: $rootScope.currentUser
      }
    }

    $scope.initNewSession = function() {
      $scope.isNewSession = true;
      $scope.sessionInfoTitle = "Создание сессии";
      $scope.session = $scope.getNewSession();
      $scope.order = {
        sessionId: $scope.session.id,
        foodOrders: []
      };
      $scope.session.orders.push($scope.order);
      $rootScope.$broadcast('initSessionInfo');
      Shops.getShop({ id: $scope.session.shopId }).then(function(shop) {
        $scope.selectedShop = shop;
      });
    }

    $scope.initExistingSessions = function() {
      $scope.isNewSession = false;
      Sessions.getSession({ id: $routeParams.id }).then(function(session) {
        $scope.session = session;
        $scope.session.orderTime = moment(new Date($scope.session.orderTime)).format('LT');
        $scope.session.deliveryTime = $scope.session.deliveryTime ? moment(new Date($scope.session.deliveryTime)).format('LT') : null;
        var order = _.find($scope.session.orders, function(order) {return order.owner.id === $rootScope.currentUser.id});
        if (order) {
          $scope.isExistingOrder = true;
          $scope.sessionInfoTitle = "Редактирование заказа";
          $scope.order = order;
        } else {
          $scope.isNewOrder = true;
          $scope.sessionInfoTitle = "Создание заказа";
          $scope.order = {
            sessionId: $scope.session.id,
            foodOrders: []
          }
          $scope.session.orders.push($scope.order);
        }
        $rootScope.$broadcast('initSessionInfo');
        return Shops.getShop({ id: $scope.session.shopId });
      }).then(function(shop) {
        $scope.selectedShop = shop;
      });
    }

    $scope.init = function() {
      $rootScope.getShops().then(function(shops) {
        $scope.shops = shops;
        if ($routeParams.id === 'new') {
          $scope.initNewSession();
        } else {
          $scope.initExistingSessions();
        }
      });
    };

    function findOrderIndexByFoodId(FoodId) {
      let OrderIndex = -1;
      $scope.order.foodOrders.forEach(function (item, i) {
        if(item.food.id == FoodId){
          OrderIndex = i;
        }
      });
      return OrderIndex;
    }

    $scope.addFoodToCart = function(food, quantity) {
      let indexOrder = findOrderIndexByFoodId(food.id);

      if(indexOrder != -1){
        $scope.order.foodOrders[indexOrder].quantity += quantity;
      }else{
        $scope.order.foodOrders.push({
          quantity: quantity,
          price: food.price * quantity,
          food: {
            id: food.id,
            name: food.name,
            description: food.description,
            imageUrl: food.imageUrl,
            price: food.price,
          }
        });
      }
    }
    $scope.emptyOrderMessage = 'Список товаров пуст.';

    $scope.saveOrder = function(order) {
      if (order.foodOrders.length === 0){
        $scope.emptyOrderMessageShow = true;
        setTimeout(function(){
          $scope.emptyOrderMessageShow = false;
        }, 2000);
        return;
      }

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
            foodOrders: _.map(order.foodOrders, function(foodOrder) { return { foodId: foodOrder.food.id, quantity: foodOrder.quantity } })
          }
          $scope.session = session;
          return Orders.createOrder(orderParams);
        }).then(function(order) {
          $location.path('/session/' + $scope.session.id);
        });
      } else if ($scope.isNewOrder) {
        var orderParams = {
          sessionId: $scope.session.id,
          foodOrders: _.map(order.foodOrders, function(foodOrder) { return { foodId: foodOrder.food.id, quantity: foodOrder.quantity } })
        }
        Orders.createOrder(orderParams).then(function(order) {
          $location.path('/session/' + $scope.session.id);
        });
      } else if ($scope.isExistingOrder) {
        var orderParams = {
          id: $scope.order.id,
          isPaid: false,
          foodOrders: _.map(order.foodOrders, function(foodOrder) { return { foodId: foodOrder.food.id, quantity: foodOrder.quantity } })
        }
        Orders.updateOrder(orderParams).then(function(order) {
          $location.path('/session/' + $scope.session.id);
        });
      }
    }

    $scope.$on('selectedShopChanged', function(event, shopId) {
      Shops.getShop({ id: shopId }).then(function(shop) {
        $scope.selectedShop = shop;
        $scope.order.foodOrders = [];
      });
    });

    $scope.init();
  }]);
