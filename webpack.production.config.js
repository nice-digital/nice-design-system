/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

var webpack = require("webpack");

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

appConfig.plugins = prodPlugins;

module.exports = [
	appConfig,
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
		eslint: appConfig.eslint,
		plugins: prodPlugins
	}
];
