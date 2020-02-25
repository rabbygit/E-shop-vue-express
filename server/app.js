var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Router Path
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var paymentRouter = require('./routes/payment');

//Mongoose path
mongoose.connect(
  'mongodb://rabby:rabby1234@ds329058.mlab.com:29058/e-commerce',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Body-parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true || false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors()); //cross browser configuration
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());


//Routes
app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/product', productRouter);
app.use('/api/payment', paymentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Handle production

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/dist'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
//   });

//   static folder
//   app.use(express.static(__dirname + '/public/dist/'));
//   handle SPA
//   app.get(/.*/, (req, res) =>
//     res.sendFile(__dirname + '/public/dist/index.html'),
//   );

//   app.use(express.static(path.join(__dirname, '../public/dist/')));
//   app.get('/', function(req, res) {
//     res.sendFile('index.html', {
//       root: path.join(__dirname, '../public/dist/'),
//     });
//   });
// }

// "dev": "nodemon server/index.js

module.exports = app;
