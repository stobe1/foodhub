angular.module('Foodhub')
  .controller('SessionController', function() {
    this.sessions = session_list;
  })
  .directive('sessionList', function () {
    return {
      template: require('./session_list.html'),
      replace: true,
      restrict: 'E'
    };
  });

var session_list = [{
  image: "img/services_logo/eda-by.png",
  delivery_url: "http://eda.by",
  delivery_timetable: "круглосуточно",
  minimal_delivery_price: "100 000 р.",
  author_name: "Василий Пупкин",
  order_time: "14:50",
  order_time_left: "30 минут",
  total_price: "290 000 р.",
  price_left: "110 000 р."
}, {
  image: "img/services_logo/edraniki-by.png",
  delivery_url: "http://edraniki.by",
  delivery_timetable: "11:00 - 22:30",
  minimal_delivery_price: "180 000 р.",
  author_name: "Василий Пупкин",
  order_time: "15:05",
  order_time_left: "45 минут",
  total_price: "350 000 р.",
  price_left: "60 000 р."
}];
