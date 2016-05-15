angular.module('Foodhub')
  .controller('SignInPageController', ['$rootScope',
  function($rootScope) {
    $rootScope.singInPage = true;
    $rootScope.pageTitle = $rootScope.projectConfig.nameProject + ' - Объединатор доставок пищи';
  }]);
