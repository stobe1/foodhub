angular.module('Foodhub')
  .controller('quantityController', ['$scope', function ($scope) {
    $scope.counter = 1;
    $scope.decreaseCount = function () {
      if ($scope.counter > 0) {
        $scope.counter -= 1;
      }
    };
    $scope.increaseCount = function () {
      $scope.counter += 1;
    };
  }])
  .directive('quantityInput', function () {
    return {
      template: require('./quantity-input.html'),
      replace: true,
      restrict: 'E',
    };
  });
