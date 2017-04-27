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
		if(/^Running \"newer.*/.test(msg)) return;

		let taskName = msg.match(/"(.*)"/)[1];
		grunt.log.writeln();
		grunt.log.writeln(chalk.magenta("TASK: " + taskName));
		grunt.log.writeln();
	};

	var r = grunt.registerTask;

	// Lint both SASS and JS
	r("lint", ["sasslint", "eslint"]);

	// Run JS unit tests
	r("test", ["mochaTest"]);

	// For building before publishing to NPM etc
	r("prepublish", ["env:dist", "clean", "lint", "test", "webfont", "sass", "postcss", "cssmin", "webpack"]);

	r("default", ["env:dev", "clean", "lint", "test", "webfont", "sass:dev", "postcss", "webpack", "watch"]);
};
