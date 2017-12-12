var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

var db = require('./model/db');
var contacts = require('./model/contacts');

var index = require('./routes/index');
var main = require('./routes/main');
var users = require('./routes/user');
var contactpage = require('./routes/contact');
var sign_in = require('./routes/signin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(session({
    secret: 'abracadabra',
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        touchAfter: 1 * 60 * 60 // = 1 hour
    })
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/


app.use('/', index);
app.use('/main', main);
app.use('/user', users);
app.use('/signin', sign_in);
app.use('/contact', contactpage);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
