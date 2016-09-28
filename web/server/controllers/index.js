var express = require("express"),
	router = express.Router();

router.use("/sass", require("./sass"));
router.use("/javascript", require("./javascript"));

router.use("/style-guide", require("./style-guide"));

router.use("/", require("./default"));

module.exports = router;
