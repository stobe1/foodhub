'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addIndex('users', ['registration_service', 'external_user_id'])
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeIndex('users', ['registration_service', 'external_user_id'])
  }
};
