angular.module('Foodhub')
.component('textInput', {
  bindings: {
    label: '@?',
    inverted: '=?',
    name: '@?',
    model: '=?'
  },
  template: require('./text_input.html'),
  controller: function() {
  },
})
