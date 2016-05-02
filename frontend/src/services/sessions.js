var config = require('../config/config');
angular.module('Foodhub')
  .factory('Sessions', function Sessions($resource) {
    return $resource(config.api_url + '/sessions/:id', {}, {
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
      }
    });
  });
