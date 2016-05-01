angular.module('Foodhub')
  .factory('Sessions', function Sessions($resource) {
    var config = require('../config/config');
    return $resource(config.host_url + config.api_url + '/sessions/:id', {}, {
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
