angular.module('Foodhub')
  .factory('Auth', function Auth($resource) {
    var config = require('../config/config');
    return $resource(config.host_url + config.api_url + '/:action', {}, {
      logout: {
        method: 'POST',
        params: {
          action: 'logout'
        }
      }
    });
  });
