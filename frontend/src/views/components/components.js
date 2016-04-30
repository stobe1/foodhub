var sessionList = require('../../fixtures/sessionList');
var listFoodOrders = require('../../fixtures/listFoodOrders');

angular.module('Foodhub')
  .controller('ComponentsController', ['$scope', 'Auth', 'Orders', 'Sessions', 'Shops', 'Users', function($scope, Auth, Orders, Sessions, Shops, Users) {
    $scope.sessions = sessionList;    

    $scope.do_btn_action = function () {
      alert("PRESS BTN")
    };

    $scope.sessions = sessionList;
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


    $scope.dropOrder = function (item) {
      alert("drop_order from ComponentsController");
    };

    $scope.product_card =  {
      'isAdd': false,
      'title': 'Пицца пицца',
      'text': " fjsdjfsdfsd,hfb s,dbvh bdxvb bxcvbnxbvnzdbjhdfbg,v zbxv,zx",
      "image" : "img/services_logo/edraniki-by.png",
      'price': "20 000",
      'foodCounter': 0,
      onAdd : function () {
        alert("controlle add");
      },

      onDelete : function () {
        alert("controlle delete");
      },
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
