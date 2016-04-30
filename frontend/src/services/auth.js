'use strict';

angular.module('Foodhub')
  .factory('Auth', function Auth ($http, $rootScope, Shops) {
  var currentUser

  return {

    getShops: function (params, callback) {
      var cb = callback || angular.noop;

      return Shops.index(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    }
  };
});
