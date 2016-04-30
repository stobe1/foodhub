angular.module('Foodhub')
  .controller('UserPageController', function($scope, Auth) {
    Auth.getShops().then(function (shops) {
      console.log(shops);
    })
  });
