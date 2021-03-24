const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const usersRouter = require('./routes/api/v1/Users');

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1/', usersRouter);

const dbuser = 'dbadmin'
const dbpass = 'dbpassword'

const mongoDB = `mongodb+srv://${dbuser}:${dbpass}@cluster0.jrvsb.mongodb.net/twitter?retryWrites=true`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const dB = mongoose.connection;
dB.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/", function(req, res) {
  res.json({test: "response"});
});

module.exports = app;
