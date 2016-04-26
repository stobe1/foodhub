module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      field: 'first_name',
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paymentOption: {
      field: 'payment_option',
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avatarUrl: {
      field: 'avatar_url',
      type: DataTypes.TEXT,
      allowNull: true
    },
    registrationService: {
      field: 'registration_service',
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    externalUserId: {
      field: 'external_user_id',
      type: DataTypes.BIGINT,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tokenExpiresAt: {
      field: 'token_expires_at',
      type: DataTypes.DATE,
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
    tableName: 'users'
  });
};
