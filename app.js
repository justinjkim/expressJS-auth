const express = require('express');
const mustache = require('mustache-express');
const session = require('express-session');
const adminRouter = require('./routes/admin.js');

const app = express();

// setup view engine
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', ['./views', './views/admin']);

app.use('/', adminRouter);

app.get('/', function(req, res) {
	res.send("hello there, if you have reached this, something is wrong.");
})


app.listen(3000, function() {
	console.log("Starting up ExpressJS-login application...");
})