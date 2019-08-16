/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

const _ = require("lodash"),
	path = require("path"),
	moment = require("moment"),
	webpack = require("webpack"),
	StringReplacePlugin = require("string-replace-webpack-plugin");

const pkg = require("./package.json"),
	banner = _.template(pkg.config.banner)({
		version: pkg.version,
		date: moment().format("YYYY-MM-DD"),
		year: moment().format("YYYY")
	}),
	bannerPlugin = new webpack.BannerPlugin({
		banner: `/*!\n${banner}\n*/\n`,
		raw: true
	});

const baseConfig = {
	entry: ["./src/javascripts/index"],
	output: {
		path: path.join(__dirname, "dist/javascripts"),
		publicPath: "/javascripts/",
		library: "nice",
		libraryTarget: "umd",
		umdNamedDefine: true
	},
	resolve: {
		modules: [path.resolve(__dirname, "./src/javascripts/"), "node_modules"]
	},
	externals: { jquery: "jQuery" },
	devtool: "#source-map",
	stats: "detailed"
};

const normalPlugins = [
	new webpack.DefinePlugin({
		PRODUCTION: false
	}),
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify("development")
		}
	}),
	new StringReplacePlugin(),
	bannerPlugin
];

const minPlugins = [
	new webpack.DefinePlugin({
		PRODUCTION: true
	}),
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify("production")
		}
	}),
	new webpack.optimize.OccurrenceOrderPlugin(true),
	new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false,
			screw_ie8: false
		},
		mangle: {
			screw_ie8: false,
			except: ["$super", "$", "exports", "require"]
		},
		output: {
			screw_ie8: false
		}
	}),
	new webpack.optimize.AggressiveMergingPlugin(),
	new StringReplacePlugin(),
	bannerPlugin
];

const webpackModules = {
	rules: [
		{
			enforce: "pre",
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "eslint-loader",
			options: {
				ignorePath: "src/javascripts/.eslintignore",
				configFile: "src/javascripts/.eslintrc"
			}
		},
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: "babel-loader"
		},
		{
			test: /\.(njk|nunjucks)$/,
			loader: "nunjucks-loader"
		},
		{
			test: /\.js$/,
			enforce: "post",
			loader: "es3ify-loader"
		},
		{
			test: /\.js$/,
			enforce: "post",
			loader: StringReplacePlugin.replace({
				replacements: [
					// Fix for "Uncaught TypeError: Cannot read property 'MutationObserver' of undefined" win nunjucks
					// See https://github.com/mozilla/nunjucks/issues/520
					{
						pattern: /global\.MutationObserver/g,
						replacement: function() {
							return "window.MutationObserver";
						}
					},
					{
						pattern: /global\.WebKitMutationObserver/g,
						replacement: function() {
							return "window.WebKitMutationObserver";
						}
					}
				]
			})
		}
	]
};

module.exports = [
	// Dev mode
	_.merge({}, baseConfig, {
		name: "nice.dev",
		output: {
			filename: "nice.dev.js",
			sourceMapFilename: "nice.dev.map"
		},
		module: webpackModules,
		plugins: normalPlugins
	}),

	// Minified
	_.merge({}, baseConfig, {
		name: "nice.min",
		output: {
			filename: "nice.min.js",
			sourceMapFilename: "nice.min.map"
		},
		module: webpackModules,
		plugins: minPlugins
	})
];
