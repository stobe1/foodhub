var config = require('../config/config');
angular.module('Foodhub')
  .factory('Auth', ['$resource', function Auth($resource) {
    var resource = $resource(config.apiUrl + '/:action', {}, {
      logout: {
        method: 'POST',
        params: {
          action: 'logout'
        }
      }
    });

    return {
      logout: function(params) {
        return resource.logout(params).$promise;
      }
    };
  }]);
