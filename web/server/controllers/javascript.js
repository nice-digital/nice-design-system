var express = require("express"),
	router = express.Router();

var api = require("./../../../dist/docs/js/API.json");

router.get("/", function(req, res) {
	res.render("javascript/index");
});

router.get("/docs", function(req, res) {
	res.render("javascript/docs", { data: api });
});

module.exports = router;
