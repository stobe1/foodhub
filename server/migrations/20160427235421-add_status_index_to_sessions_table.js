'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addIndex('sessions', ['status'])
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeIndex('sessions', ['status'])
  }
};
