angular.module('Foodhub')
.component('foodhubForm', {
  bindings: {
    phoneValue: '=?',
    firstName: '=?',
    lastName: '=?',
    mailValue: '=?',
    paytypeValue: '=?',
    address: '=?'
  },
  template: require('./form.html'),
});
