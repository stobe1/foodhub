angular.module('Foodhub')
  .directive('sessionList', function() {
    return {
      template: require('./session_list.html'),
      replace: true,
      restrict: 'E',
      scope: {
        sessionList: '=list'
      }
    };
  });
