var config = require('../config/config');
angular.module('Foodhub')
  .factory('Users', function Users($resource) {
    return $resource(config.api_url + '/users/:id', {}, {
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
