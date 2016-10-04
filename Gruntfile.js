/*eslint-env node*/
const path = require("path"),
	chalk = require("chalk");

module.exports = grunt => {
	//require("time-grunt")(grunt);

	require("load-grunt-config")(grunt, {
		configPath: path.join(process.cwd(), ".grunt-tasks"),
		pkg: grunt.file.readJSON("package.json"),
		jitGrunt: {
			staticMappings: {
				sasslint: "grunt-sass-lint",
				express: "grunt-express-server"
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

	// Generate documentation form comments in SASS and JS
	r("docs", ["sassdoc", "documentation"]);

	r("test", ["mochaTest"]);

	// For deploying the web app. Builds minified SASS/JS
	r("dist", ["env:dist", "clean", "sass:dist", "webpack:dist"]);

	// For building before publishing to NPM etc
	r("prepublish", ["env:dist", "clean", "sass:publish", "sass:publishMin", "webpack:dist"]);

	r("default", ["env:dev", "lint", "test", "concurrent:default", "watch"]);
};
