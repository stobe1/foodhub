var sessionList = require('../../fixtures/sessionList');
var listFoodOrders = require('../../fixtures/listFoodOrders');

angular.module('Foodhub')
  .controller('ComponentsController', ['$scope', 'API', function($scope, API) {
    $scope.sessions = sessionList;    

    $scope.do_btn_action = function () {
    	alert("PRESS BTN")
    };

    $scope.sessions = sessionList;
    $scope.listFoodOrders = listFoodOrders;


    $scope.drop_order = function (item) {
      alert("drop_order from ComponentsController");
      console.log(item);
    };


    //Shops//

    var params = {
      param1: 'test1',
      param2: ['test2', 'test3', 'test4']
    };
    API.getShops(params).then(function(response) {
      console.log(response.shops);
    });

    API.getShop().then(function(response) {
      console.log(response);
    });


    //Users//
    API.getUsers().then(function(response) {
      console.log(response);
    });

    API.getUser().then(function(response) {
      console.log(response);
    });

    API.updateUser().then(function(response) {
      console.log(response);
    });


    //Sessions//
    API.getSessions().then(function(response) {
      console.log(response);
    });

    API.getSession().then(function(response) {
      console.log(response);
    });

    API.updateSession().then(function(response) {
      console.log(response);
    });

    API.createSession().then(function(response) {
      console.log(response);
    });


    //Orders//
    API.updateOrder().then(function(response) {
      console.log(response);
    });

    API.createOrder().then(function(response) {
      console.log(response);
    });

    API.destroyOrder().then(function(response) {
      console.log(response);
    });

    //APIentication//
    API.logout().then(function(response) {
      console.log(response);
    }).catch(error){
      console.log(error);
    };

}]);
