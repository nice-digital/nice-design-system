var moment = require("moment"),
	grunt = require("grunt");

var eslint = require("./eslint"),
	sasslint = require("./sasslint");

module.exports = {
	options: {
		dateFormat: function(time) {
			grunt.log.writeln();
			grunt.log.writeln(`Finished watch task in ${ time }s (${ moment().format("h:mm:ss a") })`);
			grunt.log.writeln("Waiting...");
			grunt.log.writeln();
		}
	},
	sass: {
		files: sasslint.target.src,
		tasks: ["sass:dev", "postcss", "newer:sasslint", "sassdoc"],
		options: {
			spawn: false
		}
	},
	jsbuild: {
		files: ["src/javascripts/**/*.js", "web/client/javascripts/**/*.js"],
		tasks: ["webpack:dev"],
		options: {
			spawn: false
		}
	},
	eslint: {
		files: eslint.target.src,
		tasks: ["newer:eslint"],
		options: {
			spawn: false
		}
	},
	express: {
		files: ["web/server/**/*.js"],
		tasks: ["express"],
		options: {
			spawn: false,
			atBegin: true
		}
	},
	public: {
		files: ["dist/**/*.*", "web/server/views/**/*.njk"],
		options: {
			livereload: true
		}
	}
};
