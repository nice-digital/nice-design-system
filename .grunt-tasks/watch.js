var eslint = require("./eslint");

module.exports = {
	sass: {
		files: ["./src/stylesheets/**/*.scss", "./web/client/stylesheets/**/*.scss"],
		tasks: ["sass:dev", "newer:sasslint", "sassdoc"],
		options: {
			// Speed up watch task:
			spawn: false
		}
	},
	jsbuild: {
		files: ["./src/javascripts/**/*.js", "./web/client/javascripts/**/*.js"],
		tasks: ["webpack"],
		options: {
			// Speed up watch task:
			spawn: false
		}
	},
	eslint: {
		files: eslint.target.src,
		tasks: ["newer:eslint"],
		options: {
			// Speed up watch task:
			spawn: false
		}
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
};
