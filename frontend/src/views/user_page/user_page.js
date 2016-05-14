angular.module('Foodhub')
  .controller('UserPageController', ['$scope', '$filter', '$routeParams', '$rootScope', 'Users', function($scope, $filter, $routeParams, $rootScope, Users) {
    $scope.sessionInfoTitle = 'Оформление заказа';
    $rootScope.pageTitle = $rootScope.projectConfig.nameProject + ' - Профиль';

    $scope.init = function() {
      $scope.tempUser = _.clone($rootScope.currentUser);
    };

    $scope.saveUser = function() {
      Users.updateUser($scope.tempUser).then(function(user) {
        $rootScope.currentUser = user;
      })
    }

    $scope.init();
  }]);
