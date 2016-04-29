var sessionList = require('../../fixtures/sessionList');

angular.module('Foodhub')
  .controller('SessionListPageController', ['$scope', function($scope) {
    $scope.sessions = sessionList;
  }]);
