var config = require('../../config/config');

angular.module('Foodhub')
  .directive('signIn', function() {
    return {
      template: require('./sign-in.html'),
      restrict: 'E',
      replace: true,
      scope: {},
      link: function($scope) {
        $scope.vkontakteUrl = config.apiUrl + '/login/vkontakte';
        $scope.facebookUrl = config.apiUrl + '/login/facebook';
      }
    };
  });
