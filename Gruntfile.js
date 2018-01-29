/*eslint-env node*/
const path = require("path"),
	chalk = require("chalk");

module.exports = grunt => {

	if(grunt.option("timing")) {
		require("time-grunt")(grunt);
	}

	require("load-grunt-config")(grunt, {
		configPath: path.join(process.cwd(), ".grunt-tasks"),
		pkg: grunt.file.readJSON("package.json"),
		jitGrunt: {
			staticMappings: {
				sasslint: "grunt-sass-lint",
				express: "grunt-express-server",
				cssmin: "grunt-contrib-cssmin",
				releaseit: "grunt-release-it"
			}
		}
	});

	grunt.log.header = (msg) => {
		if(/^Running "newer.*/.test(msg)) return;

		let taskName = msg.match(/"(.*)"/)[1];
		grunt.log.writeln();
		grunt.log.writeln(chalk.magenta("TASK: " + taskName));
		grunt.log.writeln();
	};

	var r = grunt.registerTask;

	// Generate documentation
	r("docs", ["sassdoc", "documentation"]);

	// Lint both SASS and JS
	r("lint", ["sasslint", "eslint"]);

	// Run JS unit tests
	r("test", ["mochaTest:test"]);

	r("test:teamcity", ["mochaTest:teamcity"]);

	// For building before publishing to NPM etc
	r("dist", ["env:dist", "clean:dist", "lint", "test", "sass:dist", "postcss:dist", "cssmin:dist", "docs", "modernizr", "webpack"]);

	r("dist:teamcity", ["env:dist", "clean:dist", "lint", "test:teamcity", "sass:dist", "postcss:dist", "cssmin:dist", "docs", "modernizr", "webpack"]);

	//For building locally
	r("default", ["env:dev", "clean:temp", "lint", "test", "sass:temp", "postcss:temp", "cssmin:temp", "modernizr", "watch"]);
};
