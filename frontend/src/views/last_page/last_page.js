var moment = require('moment/min/moment-with-locales.js');
moment.locale('ru');

angular.module('Foodhub')
  .controller('LastPageController', ['$scope', '$routeParams', '$rootScope', 'Sessions', 'Users', '$location', function($scope, $routeParams, $rootScope, Sessions, Users, $location) {
    $scope.sessionInfoTitle = 'Информация о заказе';

    $scope.init = function() {
      $rootScope.getShops().then(function(shops) {
        $scope.shops = shops;
        return Sessions.getSession({ id: $routeParams.id });
      }).then(function(session) {
        $scope.session = session;
        $scope.foodInfo = foodFromSession(session);
        $scope.session.orderTime = moment(new Date($scope.session.orderTime)).format('LT');
        $scope.session.deliveryTime = moment(new Date($scope.session.deliveryTime)).format('LT');
        $rootScope.$broadcast('initSessionInfo');
        return Users.getUser({id: session.owner.id});
      }).then(function(user) {
        $scope.outPhone = user.phone;
        $scope.outFirstName = user.firstName;
        $scope.outLastName = user.lastName;
        $scope.outMail = user.email;
        $scope.outPaytypeValue = user.paymentOption;
        $scope.outAddress = user.address;
      });
    };

    $scope.postOrder = function() {
      //OrderPoster.PostOrder.then(function() {
        var sessionParams = {
          id: $scope.session.id,
          status: 1,
          deliveryTime: moment(new Date()).add(2, 'hours').toDate()
        }
      Sessions.updateSession(sessionParams).then(function(session) {
        $location.path('/session/' + session.id);
      });
    }

    function foodFromSession(session) {
      var food = {};
      for (var i = 0; i < session.orders.length; i++) {
        for (var j = 0; j < session.orders[i].foodOrders.length; j++) {
          var foodItem = session.orders[i].foodOrders[j].food;
          var foodName = foodItem.name;
          if (food[foodName] === undefined) {
            food[foodName] = {};
          }
          if (!food[foodName].image) {
            food[foodName].image = foodItem.imageUrl;
          }
          if (food[foodName].counter === undefined) {
            food[foodName].counter = session.orders[i].foodOrders[j].quantity;
          }
          else {
            food[foodName].counter += session.orders[i].foodOrders[j].quantity;
          }
          food[foodName].price = foodItem.price;
          if (food[foodName].orderedBy === undefined) {
            food[foodName].orderedBy = session.orders[i].owner.firstName + ' ' + session.orders[i].owner.lastName + '(x' + session.orders[i].foodOrders[j].quantity + ')';
          }
          else {
            food[foodName].orderedBy = food[foodName].orderedBy + ', ' + session.orders[i].owner.firstName + ' ' + session.orders[i].owner.lastName + '(x' + session.orders[i].foodOrders[j].quantity + ')';
          }
        }
      }
      return food;
    }
    $scope.init();
  }]);
