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
		},
		livereload: true
	},
	sass: {
		files: sasslint.target.src,
		tasks: ["sass:dev", "postcss", "newer:sasslint"],
		options: {
			spawn: false
		}
	},
	jsbuild: {
		files: ["src/**/*.js", "!src/components/**/*.test.js"],
		tasks: ["webpack"],
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
		files: ["server/**/*.js"],
		tasks: ["express"],
		options: {
			spawn: false,
			atBegin: true
		}
	}
};
