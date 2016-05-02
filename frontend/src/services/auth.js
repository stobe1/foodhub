var config = require('../config/config');
angular.module('Foodhub')
  .factory('Auth', function Auth($resource) {
    return $resource(config.api_url + '/:action', {}, {
      logout: {
        method: 'GET',
        params: {
          action: 'logout'
        }
      }
    });
  });
