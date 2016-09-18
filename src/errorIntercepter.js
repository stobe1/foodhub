angular.module('Foodhub')
    .factory('errorInterceptor', function ($q, $location) {
    return {
        'responseError': function (errorResponse) {
            switch (errorResponse.status) {
                case 401:
                    $location.path('/sign_in');
                    break;
                default:
                    break;
            }
            return $q.reject(errorResponse);
        }
    };
});
