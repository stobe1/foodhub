var express = require('express');
var passport = require('passport');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var config = require('./config/config');
var User = require('./models/User');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var router = express.Router();

app.get('/api/v1', function(req, res) {
  User.findAll().then(function(user){
    res.json({
      data: user
    });
  });
});

app.get('/api/v1/new', function(req, res){
  User
  .create({ firstName: 'fnord', lastName: 'omnomnom' })
  .then(function() {
    User
      .findOrCreate({where: {firstName: 'fnord'}})
      .spread(function(user, created) {
        console.log(user.get({
          plain: true
        }))
        console.log(created)
      })
  })
})

app.listen(config.serverPort, function(){
  console.log('Server is on ' + config.serverPort + " port.");
});
