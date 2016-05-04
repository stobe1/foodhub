module.exports = {
  id: 1,
  orderTime: "15:30",
  deliveryTime: "15:30",
  address: "г. Минск",
  price: 300000,
  status: 0,
  owner: {
    id: 1,
    firstName: "Гена",
    lastName: "Русецкий"  
  },
  shopId: 1,
  orders: [{
    id: 1,
    firstName: "Гена",
    lastName: "Русецкий",
    isPayed: false,
    foorOrders: [{
      id: 1,
      price: 340000,
      quantity: 2,
      food: {
        name: "Пеперони",
        description: "Состав: тесто, сыр, ветчина....",
        imageUrl: "http://asdasddfgfd.xcv",
        price: 120000
      }
    }]
  }]
};
