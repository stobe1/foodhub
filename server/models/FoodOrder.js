module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_orders', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    foodId: {
      field: 'food_id',
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'foods',
        key: 'id'
      }
    },
    orderId: {
      field: 'order_id',
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'food_orders'
  });
};
