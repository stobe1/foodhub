angular.module('Foodhub')
  .directive('quantityInput', function () {
    return {
      template: require('./quantity-input.html'),
      replace: true,
      restrict: 'E',
      scope: {
        foodCounter: '='
      },
      controller: function ($scope) {
        //делаем foodCounter равным нулю, если внешняя переменная не задана
        if(typeof $scope.foodCounter == "undefined") {
          $scope.foodCounter = 0;
        }
        $scope.increaseCount = function () {
          $scope.foodCounter += 1;
        };
        $scope.decreaseCount = function () {
          if ($scope.foodCounter > 0) {
            $scope.foodCounter -= 1;
          }
        };
      },
    };
  });
