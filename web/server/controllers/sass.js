var express = require("express"),
	router = express.Router(),
	fs = require("fs");

var data = require("./../../../dist/docs/sass/sass.json");

router.get("/", function(req, res) {
	res.render("sass/index");
});

router.get("/docs", function(req, res) {
	res.render("sass/docs", data);
});

module.exports = router;
