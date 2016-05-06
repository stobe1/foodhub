module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shops', {
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
    siteUrl: {
      field: 'site_url',
      type: DataTypes.TEXT
    },
    logoUrl: {
      field: 'logo_url',
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    deliveryPrice: {
      field: 'delivery_price',
      type: DataTypes.INTEGER(11)
    },
    minOrderPrice: {
      field: 'min_order_price',
      type: DataTypes.INTEGER(11)
    },
    minFreeDeliveryTime: {
      field: 'min_free_delivery_price',
      type: DataTypes.INTEGER(11)
    },
    deliveryTime: {
      field: 'delivery_time',
      type: DataTypes.TEXT
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
    tableName: 'shops'
  });
};
