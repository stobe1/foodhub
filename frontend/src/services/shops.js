var config = require('../config/config');
angular.module('Foodhub')
  .factory('Shops', ['$resource', function Shops($resource) {
    var resource = $resource(config.apiUrl + '/shops/:id', {}, {
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

    return {
      getShops: function (params) {
        return resource.index(params).$promise;
      },

      getShop: function (params) {
        return resource.show(params).$promise;
      }
    }
  }]);
