var config = require('../config/config');
angular.module('Foodhub')
  .factory('Orders', function Orders($resource) {
    return $resource(config.api_url + '/orders/:id', {}, {
      create: {
        method: 'POST',
        params: {
          isArray: true
        }
      },
      update: {
        method: 'PUT',
        params: {
          isArray: true
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      }
    });
  });
