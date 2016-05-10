angular.module('Foodhub')
  .directive('myProfile', function() {
    return {
      template: require('./my_profile.html'),
      replace: true,
      restrict: 'E'
    };
  });
