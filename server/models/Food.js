module.exports = function(sequelize, DataTypes) {
  return sequelize.define('foods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imageUrl: {
      field: 'image_url',
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
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
    categoryId: {
      field: 'category_id',
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'food_categories',
        key: 'id'
      }
    },
    externalFoodId: {
      field: 'external_food_id',
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'foods'
  });
};
