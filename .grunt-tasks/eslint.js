module.exports = {
	target: {
		src: [
			"src/**/*.js",
			"Gruntfile.js",
			"webpack.config.js",
			".grunt-tasks/**/*.js",
			"test/**/*.js",
			"!src/icons/nice-icons.tmpl.js"
		]
	},
	options: {
		ignorePath: "src/javascripts/.eslintignore",
		configFile: "src/javascripts/.eslintrc",
		quiet: false,
		format: "table"
	}
};
