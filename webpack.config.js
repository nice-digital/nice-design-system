/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

var WebpackNotifierPlugin = require("webpack-notifier");
var webpack = require("webpack");

var plugins = [
	// Notify on success/error
	new WebpackNotifierPlugin({title: "NICE Experience"}),
	new webpack.DefinePlugin({
		PRODUCTION: false
	}),
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify("development")
		}
	}),
	new webpack.ProvidePlugin({
		$: "jquery"
	}),
	new webpack.optimize.UglifyJsPlugin({
		minimize: false,
		mangle: false,
		compress: false,
		output: {
			beautify: true
		}
	})
];

module.exports = {
	name: "app",
	entry: [/*"babel-polyfill", */"./web/client/javascripts/app"],
	output: {
		path: "./dist/javascripts",
		filename: "app.js",
		sourceMapFilename: "app.map"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ["babel-loader"],
			exclude: /(node_modules|bower_components)/
		}]
	},
	externals: { jquery: "jQuery" },
	resolve: {
		modulesDirectories: ["./web/client/javascripts/", "./src/javascripts/"]
	},
	devtool: "#source-map",
	plugins: plugins,
	eslint: {
		ignorePath: "./src/javascripts/.eslintignore",
		configFile: "./src/javascripts/.eslintrc.json"
	}
};
