angular.module('Foodhub')
  .factory('Shops', function Shops($resource) {
    return $resource('http://localhost:3000/api/v1/shops', {}, {
      index: {
        method: 'GET',
        params: {
          isArray: true
        }
      }
    });
  });
