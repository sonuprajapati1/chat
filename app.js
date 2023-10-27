var createError = require('http-errors');
var http = require('http')
var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var mongoose = require('./database/mongo')
var socket = require('socket.io')
const passport = require('passport');
require('./utils/passport');
require("dotenv").config();
// const config = require('./config/config') 

//route
var indexRouter = require('./routes/index.route');

//middleware
var decode = require('./middlewares/jwt')

var app = express();

const session = require('express-session');

/** Get port from environment and store in Express. */
const port = process.env.PORT || "4000";
app.set("port", port);


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET',
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}));

app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use("/", indexRouter);


app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }),
  (req, res) => {
    console.log("req, res", res);
  });

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/error' }),
  function (req, res) {
    console.log("calle data", req);
    // Successful authentication, redirect success.
    res.redirect('/success');
  });
/** catch 404 and forward to error handler */
// app.use('*', (req, res) => {
//   return res.status(404).json({
//     success: false,
//     message: 'API endpoint doesnt exist'
//   })
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


/** Create HTTP server. */


const server = http.createServer(app);

const io = socket(server);
require('./utils/WebSockets')(io)
/** Listen on provided port, on all network interfaces. */
server.listen(port);
/** Event listener for HTTP server "listening" event. */
server.on("listening",()=>{
  console.log(`Listening on port:: http://localhost:${port}/`)
})
// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
