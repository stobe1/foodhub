angular.module('Foodhub')
  .controller('SessionPageFoodController', function($scope, Auth) {
    Auth.getShops().then(function (shops) {
      console.log(shops);
    })
  });
