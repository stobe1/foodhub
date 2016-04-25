var Sequelize = require('sequelize');
var db = require('../db');

var User = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  },
  email: {
    type: Sequelize.STRING,
    field: 'email'
  },
  createdAt: {
    type: Sequelize.STRING,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.STRING,
    field: 'updated_at'
  }
}, {
  freezeTableName: true
});

module.exports = User;
