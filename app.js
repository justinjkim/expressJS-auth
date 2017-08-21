const express = require('express');
const mustache = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');
const data = require('./userData.js');
//const adminRouter = require('./routes/admin.js');

const app = express();

// setup view engine
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', ['./views', './views/admin']);

// not gonna use router yet
//app.use('/', adminRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// not quite sure what this is for yet
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


// amy's authenticate function
function authenticate(req, username, password){
  var authenticatedUser = data.users.find(function (user) {
    if (username === user.username && password === user.password) {
      req.session.authenticated = true;
      console.log('User & Password Authenticated');
    } else {
      return false
    }
  });
  console.log(req.session);
  return req.session;
}


app.get('/', function(req, res) {
	res.render("index.mustache");
});

app.post('/', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  authenticate(req, username, password);
  if (req.session && req.session.authenticated){
    res.render('loggedin.mustache', { username: username });
  } else {
    res.redirect('/');
  }
});

app.listen(3000, function() {
	console.log("Starting up ExpressJS-login application...");
});