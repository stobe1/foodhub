var sessionList = require('../../fixtures/sessionList');

angular.module('Foodhub')
  .controller('ComponentsController', ['$scope', function($scope) {
    $scope.sessions = sessionList;    

    $scope.do_btn_action = function () {
    	console.log($scope.sessions);
    };

  }]);
