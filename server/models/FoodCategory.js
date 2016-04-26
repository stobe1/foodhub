module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_categories', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shopId: {
      field: 'shop_id',
      type: DataTypes.INTEGER(11),
      allowNull: true
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
    tableName: 'food_categories'
  });
};
