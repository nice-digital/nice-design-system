/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

var _ = require("lodash"),
	webpack = require("webpack");

var appConfig = require("./webpack.config.js");

var prodPlugins = [
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
	new webpack.BannerPlugin("/*!\n Experience\n */\n", { raw: true }),
	new webpack.optimize.AggressiveMergingPlugin(),
	new webpack.DefinePlugin({
		PRODUCTION: true
	}),
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify("production")
		}
	}),
	new webpack.ProvidePlugin({
		$: "jquery"
	})
];

module.exports = [
	_.extend({}, appConfig, { debug: false, plugins: prodPlugins } ),
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
		devtool: "#cheap-module-source-map",
		debug: false,
		eslint: appConfig.eslint,
		plugins: prodPlugins
	}
];
