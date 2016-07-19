var express = require("express"),
	router = express.Router();

router.use("/sass", require("./sass"));
router.use("/javascript", require("./javascript"));

router.use("/", require("./default"));

module.exports = router;
