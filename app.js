const express = require('express');
const mustache = require('mustache-express');
const session = require('express-session');
const data = require('./userData.js');
//const adminRouter = require('./routes/admin.js');

const app = express();

// setup view engine
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', ['./views', './views/admin']);

// not gonna use router yet
//app.use('/', adminRouter);

app.get('/', function(req, res) {
	res.render("index.mustache");
})


app.listen(3000, function() {
	console.log("Starting up ExpressJS-login application...");
})