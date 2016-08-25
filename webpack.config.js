/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

var WebpackNotifierPlugin = require("webpack-notifier");
var webpack = require("webpack");

var isProduction = (process.env.NODE_ENV === "production");

var plugins = [
	// Notify on success/error
	new WebpackNotifierPlugin({title: "NICE Bootstrap build"}),

	// Magic globals for environment gating e.g. if (__PRODUCTION__) { }
	new webpack.DefinePlugin({
		PRODUCTION: isProduction
	})
];

 if(isProduction) {
	plugins.push(
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	);
}

module.exports = [{
	name: "js",
	entry: [/*"babel-polyfill", */"./web/client/javascripts/app"],
	output: {
		path: "./dist/javascripts",
		filename: "app.bundle.js",
		sourceMapFilename: "app.bundle.map"
	},
	module: {
		/*preLoaders: [{
			test: /\.js$/,
			loader: "eslint",
			exclude: /(node_modules|bower_components)/
		}],*/
		loaders: [{
			test: /\.js$/,
			loaders: ["babel-loader"],
			exclude: /(node_modules|bower_components)/
		}]
	},
	externals: { jquery: "jQuery" },
	resolve: {
		root: ["./web/client/javascripts/", "./src/javascripts/"]
	},
	devtool: "#source-map",
	plugins: plugins,
	eslint: {
		ignorePath: "./src/javascripts/.eslintignore",
		configFile: "./src/javascripts/.eslintrc.json"
	}
}];
