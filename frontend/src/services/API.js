'use strict';

angular.module('Foodhub')
  .factory('API', function API ($http, $rootScope, Shops, Sessions, Users, Orders, Auth) {
  return {

    //Shops//

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
    },

    getShop: function (params, callback) {
      var cb = callback || angular.noop;

      return Shops.show(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    //Users//

    getUsers: function (params, callback) {
      var cb = callback || angular.noop;

      return Users.index(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    getUser: function (params, callback) {
      var cb = callback || angular.noop;

      return Users.show(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    updateUser: function (params, callback) {
      var cb = callback || angular.noop;

      return Users.update(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    //Sessions//

    getSessions: function (params, callback) {
      var cb = callback || angular.noop;

      return Sessions.index(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    getSession: function (params, callback) {
      var cb = callback || angular.noop;

      return Sessions.show(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    updateSession: function (params, callback) {
      var cb = callback || angular.noop;

      return Sessions.update(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    createSession: function (params, callback) {
      var cb = callback || angular.noop;

      return Sessions.create(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    //Orders//

    updateOrder: function (params, callback) {
      var cb = callback || angular.noop;

      return Orders.update(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    createOrder: function (params, callback) {
      var cb = callback || angular.noop;

      return Orders.create(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    destroyOrder: function (params, callback) {
      var cb = callback || angular.noop;

      return Orders.destroy(params,
        function (data) {
          return cb(data);
        },
        function (err){
          console.log('error', err);
          return cb(err)
        }).$promise;
    },

    //Authentication//

    logout: function (params, callback) {
      var cb = callback || angular.noop;

      return Auth.logout(params,
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
