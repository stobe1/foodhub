var sessionList = require('../../fixtures/sessionList');

angular.module('Foodhub')
  .controller('SessionListPageController', function($scope, Auth) {
    $scope.sessions = sessionList;
    Auth.getShops().then(function (shops) {
      console.log(shops);
    })
  });
