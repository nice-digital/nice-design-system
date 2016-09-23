/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

const _ = require("lodash"),
	webpack = require("webpack"),
	StringReplacePlugin = require("string-replace-webpack-plugin");

const pkg = require("./package.json"),
	banner = _.template(pkg.config.banner)({ version: pkg.version, year: new Date().getYear() + 1900 });

const webpackConfig = require("./webpack.config.js");

const appConfig = _.find(webpackConfig, { name: "app" }),
	appIEConfig = _.find(webpackConfig, { name: "app-oldie" });

const prodPlugins = [
	new webpack.DefinePlugin({
		PRODUCTION: true
	}),
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify("production")
		}
	}),
	new webpack.optimize.OccurrenceOrderPlugin(true),
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false
		},
		mangle: {
			except: ["$super", "$", "exports", "require"]
		}
	}),
	new webpack.optimize.AggressiveMergingPlugin(),
	new StringReplacePlugin(),
	new webpack.BannerPlugin(`/*!\n${banner}\n*/\n`, { raw: true })
];

const prodStats = {
	colors: true,
	modules: false,
	reasons: false,
	errorDetails: true
};

module.exports = [
	_.extend({}, appConfig, { debug: false, plugins: prodPlugins, stats: prodStats } ),
	_.extend({}, appIEConfig, { debug: false, plugins: prodPlugins, stats: prodStats } ),
	{
		name: "experience",
		entry: ["./src/javascripts/experience"],
		output: {
			path: "./dist/javascripts",
			filename: "experience.min.js",
			sourceMapFilename: "experience.min.map"
		},
		module: appConfig.module,
		resolve: {
			modulesDirectories: ["./src/javascripts/"]
		},
		externals: appConfig.externals,
		devtool: "#source-map",
		debug: false,
		eslint: appConfig.eslint,
		plugins: prodPlugins,
		stats: prodStats
	}
];
