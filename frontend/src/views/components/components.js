var sessionList = require('../../fixtures/sessionList');
var listFoodOrders = require('../../fixtures/listFoodOrders');

angular.module('Foodhub')
  .controller('ComponentsController', ['$scope', function($scope) {
    $scope.sessions = sessionList;


    $scope.do_btn_action = function () {
    	alert("PRESS BTN")
    };

    $scope.sessions = sessionList;
    $scope.listFoodOrders = listFoodOrders;

    $scope.userCard ={
      'name': "Иван Пупкин",
      'listFoodOrders': $scope.listFoodOrders,
      'isPaid' : 0
    };

    $scope.isAdmin = 1;
    $scope.canChangeOrders = 1;

    $scope.dropUser = function (item) {
      alert("dropUser from ComponentsController");
      console.log(item);
    };


    $scope.dropOrder = function (item) {
      alert("drop_order from ComponentsController");
      console.log(item);
    };

}]);
