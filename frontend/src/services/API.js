'use strict';

angular.module('Foodhub')
  .factory('API', function API (Shops, Sessions, Users, Orders, Auth) {
  return {

    //Shops//

    getShops: function (params) {
      return Shops.index(params).$promise;
    },

    getShop: function (params) {
      return Shops.show(params).$promise;
    },

    //Users//

    getUsers: function (params) {
      return Users.index(params).$promise;
    },

    getUser: function (params) {
      return Users.show(params).$promise;
    },

    updateUser: function (params) {
      return Users.update(params).$promise;
    },

    //Sessions//

    getSessions: function (params) {
      return Sessions.index(params).$promise;
    },

    getSession: function (params) {
      return Sessions.show(params).$promise;
    },

    updateSession: function (params) {
      return Sessions.update(params).$promise;
    },

    createSession: function (params) {
      return Sessions.create(params).$promise;
    },

    //Orders//

    updateOrder: function (params) {
      return Orders.update(params).$promise;
    },

    createOrder: function (params) {
      return Orders.create(params).$promise;
    },

    destroyOrder: function (params) {
      return Orders.destroy(params).$promise;
    },

    //Authentication//

    logout: function (params) {
      return Auth.logout(params).$promise;
    }
  };
});
