/// <binding ProjectOpened="Watch - Development" />
/*eslint-env node*/

const _ = require("lodash"),
	moment = require("moment"),
	webpack = require("webpack"),
	StringReplacePlugin = require("string-replace-webpack-plugin");

const pkg = require("./package.json"),
	banner = _.template(pkg.config.banner)({ version: pkg.version, date: moment().format("YYYY-MM-DD"), year: moment().format("YYYY") }),
	bannerPlugin = new webpack.BannerPlugin(`/*!\n${banner}\n*/\n`, { raw: true });

const baseConfig = {
	entry: ["./src/javascripts/experience"],
	output: {
		path: "./dist/javascripts",
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
		reasons: true,
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

const normalModule = {
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
};

const oldIEModule = {
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
};


module.exports = [

	// Dev mode
	_.merge({}, baseConfig, {
		name: "experience.dev",
		output: {
			filename: "experience.dev.js",
			sourceMapFilename: "experience.dev.map"
		},
		module: normalModule,
		plugins: normalPlugins
	}),

	// Minified
	_.merge({}, baseConfig, {
		name: "experience.min",
		output: {
			filename: "experience.min.js",
			sourceMapFilename: "experience.min.map"
		},
		module: normalModule,
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
		module: oldIEModule,
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
		module: oldIEModule,
		plugins: minPlugins
	})
];
