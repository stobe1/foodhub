angular.module('Foodhub')
  .factory('Users', function Users($resource) {
    var config = require('../config/config');
    return $resource(config.host_url + config.api_url + '/users/:id', {}, {
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
        method: 'PUT',
        params: {
          isArray: true
        }
      }
    });
  });
