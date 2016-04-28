angular.module('Foodhub')
  .controller('SessionController', ['$scope', function($scope) {
    $scope.sessions = sessionList;
  }]);

var sessionList = [{
  image: 'img/services_logo/eda-by.png',
  deliveryUrl: 'http://eda.by',
  deliveryTimetable: 'круглосуточно',
  minimalDeliveryPrice: '100 000 р.',
  authorName: 'Василий Пупкин',
  orderTime: '14:50',
  orderTimeLeft: '30 минут',
  totalPrice: '290 000 р.',
  priceLeft: '110 000 р.'
}, {
  image: 'img/services_logo/edraniki-by.png',
  deliveryUrl: 'http://edraniki.by',
  deliveryTimetable: '11:00 - 22:30',
  minimalDeliveryPrice: '180 000 р.',
  authorName: 'Василий Пупкин',
  orderTime: '15:05',
  orderTimeLeft: '45 минут',
  totalPrice: '350 000 р.',
  priceLeft: '60 000 р.'
}];
