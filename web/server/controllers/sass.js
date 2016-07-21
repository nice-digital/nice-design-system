/*eslint-env node*/
var express = require("express"),
	router = express.Router(),
	fs = require("fs"),
	path = require("path");

router.get("/", function(req, res) {
	res.render("sass/index");
});

router.get("/docs", function(req, res) {
	var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./../../../dist/docs/sass/sass.json"), "utf-8"));
	res.render("sass/docs", data);
});

module.exports = router;
