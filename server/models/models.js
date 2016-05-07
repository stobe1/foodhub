var db = require('../db');
var Food = db.import('./Food');
var FoodCategory = db.import('./FoodCategory');
var FoodOrder = db.import('./FoodOrder');
var Order = db.import('./Order');
var Session = db.import('./Session');
var Shop = db.import('./Shop');
var User = db.import('./User');

Shop.hasMany(FoodCategory, { foreignKey: 'shopId', as: 'categories' });
FoodCategory.belongsTo(Shop, { foreignKey: 'shopId', as: 'shop' });

FoodCategory.hasMany(Food, { foreignKey: 'categoryId', as: 'foods' });
Food.belongsTo(FoodCategory, { foreignKey: 'categoryId', as: 'category' });

User.hasMany(Session, { foreignKey: 'userId', as: 'sessions' });
Session.belongsTo(User, { foreignKey: 'userId', as: 'owner' });

User.hasMany(Order, { foreignKey: 'userId', as: 'orders' });
Order.belongsTo(User, { foreignKey: 'userId', as: 'owner' });

Session.hasMany(Order, { foreignKey: 'sessionId', as: 'orders' });
Order.belongsTo(Session, { foreignKey: 'sessionId', as: 'session' });

Food.hasMany(FoodOrder, { foreignKey: 'foodId', as: 'foodOrders' });
FoodOrder.belongsTo(Food, { foreignKey: 'foodId', as: 'food' });

Order.hasMany(FoodOrder, { foreignKey: 'orderId', as: 'foodOrders' });
FoodOrder.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });

exports.Food = Food;
exports.FoodCategory = FoodCategory;
exports.FoodOrder = FoodOrder;
exports.Order = Order;
exports.Session = Session;
exports.Shop = Shop;
exports.User = User;
