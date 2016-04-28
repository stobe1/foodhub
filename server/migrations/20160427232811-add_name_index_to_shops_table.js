'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addIndex('shops', ['name'])
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeIndex('shops', ['name'])
  }
};
