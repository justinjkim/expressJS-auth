const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
	console.log("Middleware to authenticate the admin");
	next();
});

router.get('/', function (req, res) {
	console.log("Requesting the home index page...");
	res.render('login.mustache');
})

module.exports = router;