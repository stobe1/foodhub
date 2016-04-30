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


    $scope.drop_order = function (item) {
      alert("DROPPP !!! (from paren controller function)");
      console.log(item);
    };

}]);
