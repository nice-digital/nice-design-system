/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

var WebpackNotifierPlugin = require("webpack-notifier");
var webpack = require("webpack");
var StringReplacePlugin = require("string-replace-webpack-plugin");

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
	new webpack.BannerPlugin("/*!\n NICE Experience\n */\n", { raw: true }),
	new StringReplacePlugin()
];

// TODO: Have 2 entries, one for old IE with polyfill
module.exports = {
	name: "app",
	entry: ["babel-polyfill", "./web/client/javascripts/app"],
	output: {
		path: "./dist/javascripts",
		filename: "app.js",
		sourceMapFilename: "app.map"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			// Fix for IE8 to wrap default keyword in quotes
			// See https://github.com/reactjs/react-redux/issues/232#issuecomment-167665147
			loader: StringReplacePlugin.replace({
				replacements: [
					{
						pattern: /\.default(?=[^\w$])/g,
						replacement: function () {
							return "['default']";
						}
					},
					{
						pattern: /\{\sdefault:/g,
						replacement: function () {
							return "{ 'default':";
						}
					}
				]
			}, "babel-loader")
			,
			exclude: /(node_modules|bower_components)/
		}]
	},
	externals: { jquery: "jQuery" },
	resolve: {
		modulesDirectories: ["./web/client/javascripts/", "./src/javascripts/", "./node_modules/"]
	},
	devtool: "#source-map",
	plugins: plugins,
	debug: true,
	eslint: {
		ignorePath: "./src/javascripts/.eslintignore",
		configFile: "./src/javascripts/.eslintrc.json"
	}
};
