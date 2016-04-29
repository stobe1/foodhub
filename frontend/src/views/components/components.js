var sessionList = require('../../fixtures/sessionList');
var listFoodOrders = require('../../fixtures/listFoodOrders');

angular.module('Foodhub')
  .controller('ComponentsController', ['$scope', 'Auth', 'Orders', 'Sessions', 'Shops', 'Users', function($scope, Auth, Orders, Sessions, Shops, Users) {
    $scope.sessions = sessionList;

    $scope.panes = [
      { title:"Пицца",   content:"контент вкладки 1" , active: true},
      { title:"Драники", content:"контент вкладки 2"},
      { title:"Суши",    content:"контент вкладки 3"}
    ];

    $scope.doBtnAction = function () {
      alert("PRESS BTN")
    };

    $scope.listFoodOrders = listFoodOrders;

    $scope.userCard ={
      'name': "Иван Пупкин",
      'listFoodOrders': $scope.listFoodOrders,
      'isPaid' : 0
    };

    $scope.isAdmin = 1;
    $scope.canChangeOrders = 1;

    $scope.dropUser = function (item) {
      alert("dropUser from ComponentsController");
      console.log(item);
    };

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
      firstName: 'Homer',
      lastName: 'Simpson',
      email: 'homersimpson.gmail.com'
    }

    Users.updateUser(user).then(function(response) {
      console.log(response);
    });
}]);
