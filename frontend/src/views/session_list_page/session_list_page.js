var _ = require('lodash');

angular.module('Foodhub')
  .controller('SessionListPageController', ['$scope', 'Sessions', '$rootScope', '$filter', function($scope, Sessions, $rootScope, $filter) {

    $scope.getDifferenceString = function(date1, date2) {
      var diff = date1 - date2;
      var hours = (diff - diff % 3600000) / (3600000);
      var minutes = Math.round((diff - hours * 3600000) / 60000);
      return hours + ' часов ' + minutes + ' минут';
    };

    $scope.getSessions = function() {
      return _.map($scope.sessions, function(session) {
        var shop = _.find($scope.shops, { id: session.shopId });
        return {
          id: session.id,
          image: shop.logoUrl,
          deliveryUrl: shop.siteUrl,
          deliveryTimetable: shop.deliveryTime,
          minimalDeliveryPrice: 1000000,
          authorName: session.owner.firstName + ' ' + session.owner.lastName,
          orderTime: $filter('timeFilter')(new Date(session.orderTime)),
          orderTimeLeft: $scope.getDifferenceString(new Date(session.orderTime), new Date()),
          totalPrice: session.price,
          priceLeft: session.price < shop.minOrderPrice ? shop.minOrderPrice - session.price : 0
        };
      });
    };

    $scope.init = function() {
      $rootScope.getShops().then(function(shops) {
        $scope.shops = shops;
        return Sessions.getSessions();
      }).then(function(responce) {
        $scope.sessions = responce.sessions;
        $scope.mappedSessions = $scope.getSessions();
      });
    };

    $scope.init();
  }]);
