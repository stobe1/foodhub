var config = require('../config/config');
angular.module('Foodhub')
  .factory('Users', ['$resource', function Users($resource) {
    var resource = $resource(config.apiUrl + '/users/:id', {}, {
      index: {
        method: 'GET',
        params: {
          isArray: true
        }
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT'
      }
    });

    return {
      getUsers: function (params) {
        return resource.index(params).$promise;
      },

      getUser: function (params) {
        return resource.show(params).$promise;
      },

      updateUser: function (params) {
        return resource.update(params).$promise;
      }
    }
  }]);
