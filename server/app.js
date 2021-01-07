var express = require('express');
const bodyParser = require("body-parser");
var path = require('path')
var config = require('./config')
const cors = require("cors"); 
var app = express();
var passport		=	require('passport');

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application........." });
// });
const localSignupStrategy = require('./middleware/passport/local-signup')
const localLoginStrategy = require('./middleware/passport/local-login')

passport.use('local-login', localLoginStrategy)
passport.use('local-signup', localSignupStrategy)
app.use('/api', require('./routes/index'))

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });

// app.listen(3030);