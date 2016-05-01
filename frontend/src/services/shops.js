angular.module('Foodhub')
  .factory('Shops', function Shops($resource) {
    var config = require('../config/config');
    return $resource(config.host_url + config.api_url + '/shops/:id', {}, {
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
      }
    });
  });
