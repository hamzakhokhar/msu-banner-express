'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var course = require('./routes/course');
var section = require('./routes/section');
var professor = require('./routes/professor');

var mustacheExpress = require('mustache-express')

 var app = express();
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://hamzakhokhar:Hamza1994@ds245615.mlab.com:45615/web_app12345';

mongoose.connect(mongoDB, {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Set up mongoose connection


// var mongoose = require('mongoose');
// var dev_db_url = 'mongodb://hamzakhokhar:Hamza1994@ds245615.mlab.com:45615/web_app12345'
// var mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine setup
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.use('/', index);
app.use('/user', users);
app.use('/section',section);
app.use('/course', course);
app.use('/professor', professor);

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
