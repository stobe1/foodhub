var sessionList = require('../../fixtures/sessionList');

angular.module('Foodhub')
  .controller('ComponentsController', ['$scope', function($scope) {
    $scope.sessions = sessionList;
  }]);
