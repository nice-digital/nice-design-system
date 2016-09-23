/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

const WebpackNotifierPlugin = require("webpack-notifier"),
	webpack = require("webpack"),
	StringReplacePlugin = require("string-replace-webpack-plugin"),
	_ = require("lodash");

const pkg = require("./package.json"),
	banner = _.template(pkg.config.banner)({ version: pkg.version, year: new Date().getYear() + 1900 });

const plugins = [
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
	new webpack.BannerPlugin(`/*!\n${banner}\n*/\n`, { raw: true }),
	new StringReplacePlugin()
];

const baseConfig = {
	output: {
		path: "./dist/javascripts"
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
	},
	stats: {
		colors: true,
		modules: false,
		reasons: false,
		errorDetails: true
	}
};

module.exports = [

	// Non-polyfilled version for modern browsers
	_.merge({}, baseConfig, {
		name: "app",
		entry: ["./web/client/javascripts/app"],
		output: {
			filename: "app.js",
			sourceMapFilename: "app.map"
		},
		module: {
			loaders: [{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					babelrc: false,
					presets: [ "es2015" ],
					passPerPreset: true,
					plugins: [
						["typecheck", {
							disable: { production: true }
						}],
						"syntax-flow",
						"transform-flow-strip-types"
					]
				}
			}]
		},
	}),


	// Polyfilled version for old IE
	_.merge({}, baseConfig, {
		name: "app-oldie",
		entry: ["babel-polyfill", "./web/client/javascripts/app"],
		output: {
			filename: "app.oldie.js",
			sourceMapFilename: "app.oldie.map"
		},
		module: {
			loaders: [{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					babelrc: false,
					presets: [ "es2015" ],
					passPerPreset: true,
					plugins: [
						["typecheck", {
							disable: { production: true }
						}],
						"syntax-flow",
						"transform-flow-strip-types",
						"transform-es3-member-expression-literals",
						"transform-es3-property-literals"
					]
				}
			}],
			// Fix for IE8 to wrap default keyword in quotes
			// See https://github.com/reactjs/react-redux/issues/232#issuecomment-167665147
			postLoaders: [{
				test: /\.js$/,
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
				})
			}]
		},
	})
];
