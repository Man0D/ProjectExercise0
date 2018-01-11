var express         = require('express'),
    path            = require('path'),
    favicon         = require('serve-favicon'),
    logger          = require('morgan'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    session         = require('express-session'),
    mongoose        = require('mongoose');

var passport = require('passport');
var flash    = require('connect-flash');

const MongoStore    = require('connect-mongo')(session);

var db          = require('./model/db'),
    contacts    = require('./model/contacts'),
    user        = require('./model/user');

var index       = require('./routes/index'),
    main        = require('./routes/main'),
    users       = require('./routes/user'),
    contact_page = require('./routes/contact'),
    sign_up     = require('./routes/signup');

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

//var configDB = require('./config/database.js');

require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

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
app.use('/signup', sign_up);
app.use('/contact', contact_page);

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
