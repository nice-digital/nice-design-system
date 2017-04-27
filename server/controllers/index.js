var express = require("express"),
	router = express.Router();

router.use("/", require("./default"));

module.exports = router;
