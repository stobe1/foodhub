var Sequelize = require('sequelize');
var config = require('./config/config');

var db = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect
});

module.exports = db;
