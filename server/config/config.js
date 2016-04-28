var config = {
  host: 'localhost',
  dialect: 'mysql',
  serverPort: 3000,
  port: 3306,
  database: 'foodhubdb',
  username: 'root',
  password: 'root',
  auth: {
    facebook: {
      id: 235051813522395,
      secret: '0b6f240ce894dee5c3c0066072d5b80b',
      callback: 'http://dummy.com:3000/api/v1/login/facebook/return'
    }
  }
};

module.exports = config;
