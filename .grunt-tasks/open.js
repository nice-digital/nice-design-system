var express = require("./express");

module.exports = {
	web: {
		path: `http://localhost:${express.default.options.port}/`
	}
};
