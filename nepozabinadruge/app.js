// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyCy4I8vK968QoIV1QvWA4UzHG9A2o1vyNE",
  authDomain: "nepozabinadruge.firebaseapp.com",
  databaseURL: "https://nepozabinadruge.firebaseio.com",
  projectId: "nepozabinadruge",
  storageBucket: "nepozabinadruge.appspot.com",
  messagingSenderId: "578222346888",
  appId: "1:578222346888:web:2a43be816fe6a2dd44453d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRoutes');
var botRouter = require('./routes/botRoutes');
var requestRouter = require('./routes/requestRoutes');
var minigamesRouter = require('./routes/minigameRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bot', botRouter);
app.use('/request', requestRouter);
app.use('/minigames', minigamesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
