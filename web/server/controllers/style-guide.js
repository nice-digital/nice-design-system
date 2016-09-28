var express = require("express"),
	router = express.Router();

router.get("/iconography", function(req, res) {
	var iconFont = require("./../../../dist/docs/fonts/nice-icons.json");

	res.render("style-guide/iconography", { data: iconFont });
});

module.exports = router;
