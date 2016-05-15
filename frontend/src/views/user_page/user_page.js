angular.module('Foodhub')
  .controller('UserPageController', ['$scope', '$filter', '$routeParams', '$rootScope', 'Users', function($scope, $filter, $routeParams, $rootScope, Users) {
    $scope.sessionInfoTitle = 'Оформление заказа';
    $rootScope.pageTitle = $rootScope.projectConfig.nameProject + ' - Профиль';

    $scope.catchError = function(error){
      console.log(error)
      if(error.status && error.data.message){
        $scope.errorMessage = "Error: " + error.status + ' ' + error.data.message;
      } else {
        $scope.errorMessage = "Error: " + error;
      }
      $scope.errorCaught = true;
    }
    $scope.hideError = function() {
      $scope.errorCaught = false;
    }
    $scope.init = function() {
      $scope.tempUser = _.clone($rootScope.currentUser);
    };

    $scope.saveUser = function() {
      Users.updateUser($scope.tempUser).then(function(user) {
        $rootScope.currentUser = user;
        $scope.userSaved = true;
        setTimeout(function(){
          $scope.userSaved = false;
        }, 1000);
      }).catch(function(error){
        $scope.catchError(error);
        $scope.userNotSaved = true;
        setTimeout(function(){
          $scope.userNotSaved = false;
        }, 1000);
      });
    }

    $scope.init();
  }]);
