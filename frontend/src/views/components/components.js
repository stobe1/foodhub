var sessionList = require('../../fixtures/sessionList');
var listFoodOrders = require('../../fixtures/listFoodOrders');
var shops = require('../../fixtures/shops');
var session = require('../../fixtures/sessionFull');

angular.module('Foodhub')
  .controller('ComponentsController', ['$scope', 'Auth', 'Orders', 'Sessions', 'Shops', 'Users', function($scope, Auth, Orders, Sessions, Shops, Users) {
    $scope.sessions = sessionList;

    $scope.panes = [
      { title:'Пицца', content:'контент вкладки 1' , active: true},
      { title:'Драники', content:'контент вкладки 2'},
      { title:'Суши', content:'контент вкладки 3'}
    ];

    $scope.listFoodOrders = listFoodOrders;


    $scope.cart = {
      isFixed: false,
      confirmText: "Подтверждаю корзину",
      confirmUrl: "/confirm",
      onConfirm: function () {
        alert("cart.onConfirm() | ComponentsController");
      },
      cancelText: "Отменить всё",
      cancelUrl: "/cancel",
      onCancel: function () {
        alert("cart.onCancel() | ComponentsController");
      },
      listFoodOrders : $scope.listFoodOrders,
    };
    $scope.canChangeOrders = 0;

    $scope.doBtnAction = function () {
      alert("PRESS BTN")
    };

    $scope.sessionInfoTitle = "Информация о заказе";
    $scope.sessions = sessionList;
    $scope.listFoodOrders = listFoodOrders;

    $scope.userCard ={
      'name': "Иван Пупкин",
      'listFoodOrders': $scope.listFoodOrders,
      'isPaid' : false
    };

    $scope.isAdmin = 1;
    $scope.canChangeOrders = 1;

    $scope.dropUser = function (item) {
      alert("dropUser from ComponentsController");
      console.log(item);
    };
    $scope.shops = shops;
    $scope.session = session;
    $scope.readonly = false;

    $scope.dropOrder = function dropOrder(item) {
      alert("drop! (from ComponentsController)");
      console.log(item);
    };

    $scope.onAddProduct = function onAddProduct (item) {
      alert("onAddProduct(product) | функция вызвана в ComponentsController");
    },

    $scope.onDeleteProduct = function onDeleteProduct (item) {
      alert("onDeleteProduct(product) | функция вызвана в ComponentsController");
    };

    $scope.productCard =  {
      isAdded: false,
      title: 'Халаднік з бурачком',
      text: "Лёгкі і свежы халодны суп з бураком, свежым храбусткім агурком, зялёнай цыбуляй, духмяным кропам і яйкам. Дастаўляецца разам са смятанай у асобным соуснiку. Вялікая смачная порцыя 400+ мл",
      image : "http://edraniki.by/wp-content/uploads/2015/08/IMG_7435_1-600x533.jpg",
      price: 50000,
      foodCounter: 0,
    };

    //Users//
    var user = {
      id: 1,
      firstName: 'Homer22',
      lastName: 'Simpson',
      email: 'homersimpson@gmail.com'
    }

    // Orders.createOrder({ sessionId: 3, foodOrders: [{foodId: 1, quantity: 10}, {foodId: 1, quantity: 3}] }).then(function(response) {
    //   console.log(response);
    // });

    // Orders.destroyOrder({id: 20}).then(function(order) {
    //   console.log(order);
    // });

    // Sessions.getSession({id: 3}).then(function(session) {
    //   console.log(session);
    // });

    Orders.destroyOrder({id: 24}).then(function(order) {
      console.log(order);
    });
}]);
