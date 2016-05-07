module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_categories', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    shopId: {
      field: 'shop_id',
      type: DataTypes.INTEGER(11),
      references: {
        model: 'shops',
        key: 'id'
      }
    },
    shopId: {
      field: 'shop_id',
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'shops',
        key: 'id'
      }
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE
    }
  }, {
    tableName: 'food_categories'
  });
};
