angular.module('Foodhub')
.component('foodhubForm', {
  bindings: {
    phoneValue: '=?',
    nameValue: '=?',
    mailValue: '=?',
    paytypeValue: '=?'
  },
  template: require('./form.html'), 
})
