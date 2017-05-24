/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

const _ = require("lodash"),
	path = require("path"),
	moment = require("moment"),
	webpack = require("webpack"),
	StringReplacePlugin = require("string-replace-webpack-plugin");

const pkg = require("./package.json"),
	banner = _.template(pkg.config.banner)({ version: pkg.version, date: moment().format("YYYY-MM-DD"), year: moment().format("YYYY") }),
	bannerPlugin = new webpack.BannerPlugin(`/*!\n${banner}\n*/\n`, { raw: true });

const baseConfig = {
	entry: ["./src/javascripts/experience"],
	output: {
		path: path.join(__dirname, "dist/javascripts"),
		publicPath: "/javascripts/",
		library: "experience",
		libraryTarget: "umd",
		umdNamedDefine: true
	},
	resolve: {
		root: ["./src/javascripts/"],
		modulesDirectories: ["node_modules"],
		extensions: ["", ".js"]
	},
	externals: { jquery: "jQuery" },
	devtool: "#source-map",
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
	bannerPlugin
];

const moduleObj = {
	loaders: [
		{
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
		},
		{
			test: /\.(njk|nunjucks)$/,
			loader: "nunjucks-loader"
		}
	],
	postLoaders: [
		{
			test: /\.js$/,
			loader: StringReplacePlugin.replace({
				replacements: [
					// Fix for IE8 to wrap default keyword in quotes
					// See https://github.com/reactjs/react-redux/issues/232#issuecomment-167665147
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
					},
					// Fix for "Uncaught TypeError: Cannot read property 'MutationObserver' of undefined" win nunjucks
					// See https://github.com/mozilla/nunjucks/issues/520
					{
						pattern: /global\.MutationObserver/g,
						replacement: function () {
							return "window.MutationObserver";
						}
					},
					{
						pattern: /global\.WebKitMutationObserver/g,
						replacement: function () {
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
		name: "experience.dev",
		output: {
			filename: "experience.dev.js",
			sourceMapFilename: "experience.dev.map"
		},
		module: moduleObj,
		plugins: normalPlugins
	}),

	// Minified
	_.merge({}, baseConfig, {
		name: "experience.min",
		output: {
			filename: "experience.min.js",
			sourceMapFilename: "experience.min.map"
		},
		module: moduleObj,
		plugins: minPlugins
	}),


	// Dev mode - Old IE
	_.merge({}, baseConfig, {
		entry: ["babel-polyfill"].concat(baseConfig.entry),
		name: "experience.oldie.dev",
		output: {
			filename: "experience.oldie.dev.js",
			sourceMapFilename: "experience.oldie.dev.map"
		},
		module: moduleObj,
		plugins: normalPlugins
	}),

	// Minified - Old IE
	_.merge({}, baseConfig, {
		entry: ["babel-polyfill"].concat(baseConfig.entry),
		name: "experience.oldie.min",
		output: {
			filename: "experience.oldie.min.js",
			sourceMapFilename: "experience.oldie.min.map"
		},
		module: moduleObj,
		plugins: minPlugins
	})
];
