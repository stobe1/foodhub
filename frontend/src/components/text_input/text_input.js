angular.module('Foodhub')
.component('textInput', {
  bindings: {
    label: '@?',
    inverted: '=?',
    name: '@?',
    model: '=?',
    invalid: '<',
    readonly: '<'
  },
  template: require('./text_input.html')
})
