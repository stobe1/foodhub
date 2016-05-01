angular.module('Foodhub')
  .factory('Orders', function Orders($resource) {
    var config = require('../config/config');
    return $resource(config.host_url + config.api_url + '/orders/:id', {}, {
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
