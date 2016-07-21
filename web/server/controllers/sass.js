var express = require("express"),
	router = express.Router(),
	fs = require("fs");

router.get("/", function(req, res) {
	res.render("sass/index");
});

router.get("/docs", function(req, res) {
	var data = require("./../../../dist/docs/sass/sass.json");
	res.render("sass/docs", data);
});

module.exports = router;
