var config = {
  host: 'localhost',
  dialect: 'mysql',
  serverPort: 8080,
  port: 3306,
  database: 'foodhubdb',
  username: 'root',
  password: 'root',
  auth: {
    facebook: {
      id: 235051813522395,
      secret: '0b6f240ce894dee5c3c0066072d5b80b',
      callback: 'http://foodhub.com:8080/api/v1/login/facebook/return'
    }
  }
};

module.exports = config;
