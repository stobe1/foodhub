'use strict';
var angular = require('angular');
 
angular.module('Foodhub',[])
.directive('button', function() {
    return {
        restrict: 'E',
        template: '<a class="button" href="">Сохранить</a>',
    };
});