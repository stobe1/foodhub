'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'food_categories', {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        }
      }, { 
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('food_categories');
  }
};
