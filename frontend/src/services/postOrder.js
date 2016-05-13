var config = require('../config/config');
angular.module('Foodhub')
  .factory('PostOrder', ['$resource', function PostOrder($resource) {
    var resource = $resource(config.apiUrl + '/postorder/:id', {}, {
      create: {
        method: 'POST'
      }
    });

    return {
      post: function(params) {
        return resource.create(params).$promise;
      }
    };
  }]);
