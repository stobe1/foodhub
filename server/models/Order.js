module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    price: {
      type: DataTypes.INTEGER(11)
    },
    isPayed: {
      field: 'is_payed',
      type: DataTypes.BOOLEAN
    },
    sessionId: {
      field: 'session_id',
      type: DataTypes.INTEGER(11)
      references: {
        model: 'sessions',
        key: 'id'
      }
    },
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER(11)
      references: {
        model: 'users',
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
    tableName: 'orders'
  });
};
