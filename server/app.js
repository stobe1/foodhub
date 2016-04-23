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

router.get('/api/v1', function(req, res) {
  User.findById(1).then(function(user){
    res.json({
      data: user
    });
  });

});

app.use('/api/v1', router);

app.listen(config.port);
