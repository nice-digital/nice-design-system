var eslint = require("./eslint");


module.exports = {
	sass: {
		files: ["./src/stylesheets/**/*.scss", "./web/client/stylesheets/**/*.scss"],
		tasks: ["sasslint", "sass", "sassdoc"]
	},
	eslint: {
		files: eslint.target,
		tasks: ["eslint"]
	},
	jsbuild: {
		files: ["./src/javascripts/**/*.js", "./web/client/javascripts/**/*.js"],
		tasks: ["webpack"]
	},
	express: {
		files: ["./web/server/**/*.js"],
		tasks: ["express"],
		options: {
			spawn: false,
			atBegin: true
		}
	},
	public: {
		files: ["./dist/stylesheets/**/*.css", "./dist/javascripts/**/*.js", "./web/server/views/**/*.njk"],
		options: {
			livereload: true
		}
	}
}
