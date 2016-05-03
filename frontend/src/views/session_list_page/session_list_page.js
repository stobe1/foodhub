var sessionList = require('../../fixtures/sessionList');

angular.module('Foodhub')
  .controller('SessionListPageController', function($scope) {
    $scope.sessions = sessionList;
  });
