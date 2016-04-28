angular.module('Foodhub')
  .directive('foodhubFooter', function () {
    return {
      template: require('./footer.html'),
      replace: true,
      restrict: 'E'
    };
  });
