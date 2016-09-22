var _ = require("lodash"),
	webpack = require("webpack");

var webpackConfig = require("./../webpack.config.js"),
	webpackProdConfig = require("./../webpack.production.config.js");

module.exports = {

	dev: webpackConfig,

	dist: webpackProdConfig,
};
