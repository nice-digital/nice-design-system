module.exports = {
	target: {
		src: [
			"src/javascripts/**/*.js",
			"Gruntfile.js",
			"webpack.config.js",
			"webpack.production.config.js",
			".grunt-tasks/**/*.js",
			"web/server/**/*.js",
			"web/client/**/*.js",
			"test/**/*.js"
		]
	},
	options: {
		ignorePath: "src/javascripts/.eslintignore",
		configFile: "src/javascripts/.eslintrc.json",
		quiet: false,
		format: "table"
	}
};
