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
      type: DataTypes.TEXT,
      allowNull: true
    },
    logoUrl: {
      field: 'logo_url',
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deliveryPrice: {
      field: 'delivery_price',
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    minOrderPrice: {
      field: 'min_order_price',
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    minFreeDeliveryTime: {
      field: 'min_free_delivery_price',
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    deliveryTime: {
      field: 'delivery_time',
      type: DataTypes.TEXT,
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
    tableName: 'shops'
  });
};
