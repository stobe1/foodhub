var db = require('../db');
var Food = db.import('./Food');
var FoodCategory = db.import('./FoodCategory');
var FoodOrder = db.import('./FoodOrder');
var Order = db.import('./Order');
var Session = db.import('./Session');
var Shop = db.import('./Shop');
var User = db.import('./User');

Shop.hasMany(FoodCategory, { foreignKey: 'shop_id', as: 'categories' });
FoodCategory.belongsTo(Shop, { foreignKey: 'shop_id' });

FoodCategory.hasMany(Food, { foreignKey: 'category_id' });
Food.belongsTo(FoodCategory, { foreignKey: 'category_id' });

exports.Food = Food;
exports.FoodCategory = FoodCategory;
exports.FoodOrder = FoodOrder;
exports.Order = Order;
exports.Session = Session;
exports.Shop = Shop;
exports.User = User;
