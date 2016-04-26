'use strict';
var angular = require('angular');

var templateHTML = require('./button.html');


// вместо фабрики мы используем обычные объекты
const myComponentDefinition = {
    bindings: {
       'title': '@',
       'href': '@',
       'target': '@'
    },

    template: templateHTML,

    controller: function() {
        this.title = 'world';
        this.href = "";
        this.target = "_self";
    }
}

angular.module('Foodhub').component('myButton', myComponentDefinition);