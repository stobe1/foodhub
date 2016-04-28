'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addIndex('users', ['email'])
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeIndex('users', ['email'])
  }
};
