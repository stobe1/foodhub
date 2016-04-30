angular.module('Foodhub')
  .controller('LastPageController', function($scope, Auth) {
    Auth.getShops().then(function (shops) {
      console.log(shops);
    })
  });
