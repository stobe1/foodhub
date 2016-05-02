var config = require('../config/config');
angular.module('Foodhub')
  .factory('Shops', function Shops($resource) {
    return $resource(config.api_url + '/shops/:id', {}, {
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
