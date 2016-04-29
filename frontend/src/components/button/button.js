'use strict';

angular.module('Foodhub').component('customButton', {
    bindings: {
       'title': '@',
       'href': '@',
       'target': '@',
       'isStretch' : '@',
       "isTransparent": "@",
    },

    template: require('./button.html'),

    controller: function() {

    }
});
