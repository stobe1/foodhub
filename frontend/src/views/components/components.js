var sessionList = require('../../fixtures/sessionList');
var listFoodOrders = require('../../fixtures/listFoodOrders');

angular.module('Foodhub')
  .controller('ComponentsController', ['$scope', function($scope) {
<<<<<<< HEAD
    $scope.sessions = sessionList;    

    $scope.do_btn_action = function () {
    	alert("PRESS BTN")
    };

=======
    $scope.sessions = sessionList;
    $scope.listFoodOrders = listFoodOrders;


	
	$scope.name = "Айсидора Дункай";
	$scope.isPay = true;

    $scope.total_price="48000";
    $scope.confirm_text="Lобавить в заказа";
    $scope.confirm_url="/next";
    $scope.cancel_text="Отменить нахуй";
    $scope.cancel_url="/exit";
>>>>>>> user_card
  }]);
