module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    isPayed: {
      field: 'is_payed',
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sessionId: {
      field: 'session_id',
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'sessions',
        key: 'id'
      }
    },
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
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
    tableName: 'orders'
  });
};
