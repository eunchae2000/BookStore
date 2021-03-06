var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var app = express();

var userRouter = require('./src/routes/userRoute');
var bookRouter = require('./src/routes/bookRoute');
var mypageRouter = require('./src/routes/mypageRoute');
var cartRouter = require('./src/routes/cartRoute');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method", {
  methods: ["POST", "GET", "DELETE"]
}))

app.use(session({
  secret:'1234',
  resave:false,
  saveUninitialized:true
}))


app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/mypage', mypageRouter);
app.use('/cart', cartRouter);

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
