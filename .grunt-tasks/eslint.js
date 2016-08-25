module.exports = {
	target: {
		src: [
			"./src/javascripts/**/*.js",
			"./Gruntfile.js",
			"./webpack.config.js",
			"./.grunt-tasks/**/*.js",
			"./web/server/**/*.js",
			"./web/client/**/*.js"
		]
	},
	options: {
		ignorePath: "./src/javascripts/.eslintignore",
		configFile: "./src/javascripts/.eslintrc.json",
		quiet: false
	}
};
