angular.module('Foodhub')
  .controller('SessionPageUsersController', function($scope, Auth) {
    Auth.getShops().then(function (shops) {
      console.log(shops);
    })
  });
