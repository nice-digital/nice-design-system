var _ = require("lodash"),
	webpack = require("webpack");

var webpackConfig = require("./../webpack.config.js"),
	webpackProdConfig = require("./../webpack.production.config.js");

module.exports = {

	dev: _.extend({}, webpackConfig, {
		stats: {
			colors: true,
			modules: true,
			reasons: false,
			errorDetails: true
		},
		debug: true
	}),

	dist: _.extend({}, webpackProdConfig, {
		stats: {
			colors: true,
			modules: false,
			reasons: false,
			errorDetails: true
		}
	}),
};
