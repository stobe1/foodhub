var sessionList = require('../../fixtures/sessionList');
var listFoodOrders = require('../../fixtures/listFoodOrders');

angular.module('Foodhub')
  .controller('ComponentsController', ['$scope', 'Auth', 'Orders', 'Sessions', 'Shops', 'Users', function($scope, Auth, Orders, Sessions, Shops, Users) {
    $scope.sessions = sessionList;    

    $scope.do_btn_action = function () {
    	alert("PRESS BTN")
    };

    $scope.sessions = sessionList;
    $scope.listFoodOrders = listFoodOrders;


    $scope.drop_order = function (item) {
      alert("drop_order from ComponentsController");
    };


    //Users//
    var user = {
      firstName: 'Homer',
      lastName: 'Simpson',
      email: 'homersimpson.gmail.com'
    }

    Users.updateUser(user).then(function(response) {
      console.log(response);
    });
}]);
