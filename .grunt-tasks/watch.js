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
		tasks: ["sass:temp", "postcss:temp", "cssmin:temp", "newer:sasslint"],
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
