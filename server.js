const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const uploadRouter = require('./routes/upload')
const updateRouter = require('./routes/update')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/file-upload', uploadRouter);
app.use('/update', updateRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(process.env.PORT || port)

module.exports = app;