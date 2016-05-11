var listFoodOrders = require('../../fixtures/listFoodOrders');

angular.module('Foodhub')
  .controller('LastPageController', ['$scope', '$filter', '$routeParams', '$rootScope', 'Orders', 'Sessions', 'Shops', 'Users', function($scope, $filter, $routeParams, $rootScope, Orders, Sessions, Shops, Users) {
    // $scope.listFoodOrders = listFoodOrders;
    $scope.sessionInfoTitle = "Информация о заказе";

    $scope.init = function() {
      $rootScope.getShops().then(function(shops) {
        $scope.shops = shops;
        return Sessions.getSession({ id: $routeParams.id });
      }).then(function(session) {
        if (!session) {
          $location.path('/');
        } else {
          $scope.session = session;
          $scope.foodInfo = foodFromSession(session);
          $scope.session.orderTime = $filter('timeFilter')(new Date($scope.session.orderTime));
          $scope.session.deliveryTime = $filter('timeFilter')(new Date($scope.session.deliveryTime));
          $rootScope.$broadcast('initSessionInfo');
        }
        return Users.getUser({id: session.owner.id})
      }).then(function(user){
        $scope.outPhone = user.phone;
        $scope.outName = user.firstName;
        $scope.outMail = user.email;
      });
    };

    function foodFromSession(session){
      var food={};
      for(var i=0; i < session.orders.length; i++){
        for(var j=0; j<session.orders[i].foodOrders.length; j++){
          var foodItem = session.orders[i].foodOrders[j].food;
          var foodName = foodItem.name;
          if(food[foodName]===undefined){
            food[foodName]={};
          }
          if(!food[foodName].image){
            food[foodName].image = foodItem.imageUrl;
          }
          if(food[foodName].counter === undefined){
            food[foodName].counter = session.orders[i].foodOrders[j].quantity;
          }
          else{
            food[foodName].counter += session.orders[i].foodOrders[j].quantity;
          }
          food[foodName].price = foodItem.price
          if(food[foodName].orderedBy === undefined){
            food[foodName].orderedBy = session.orders[i].owner.firstName + ' ' + session.orders[i].owner.lastName + '(x' + session.orders[i].foodOrders[j].quantity + ')'
          }
          else{
            food[foodName].orderedBy = food[foodName].orderedBy + ', ' + session.orders[i].owner.firstName + ' ' + session.orders[i].owner.lastName + '(x' + session.orders[i].foodOrders[j].quantity + ')'
          }
        }
      }
      return food;
    }
    $scope.init();
  }]);
