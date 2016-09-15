/*eslint-env node*/
var path = require("path");

module.exports = grunt => {
	require("time-grunt")(grunt);

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

	var r = grunt.registerTask;

	// Lint both SASS and JS
	r("lint", ["sasslint", "eslint"]);

	// Generate documentation form comments in SASS and JS
	r("docs", ["sassdoc", "documentation"]);

	// For deploying the web app. Builds minified SASS/JS
	r("dist", ["env:dist", "clean", "sass:dist", "webpack:dist"]);

	// For building before publishing to NPM etc
	r("publish", ["env:dist", "clean", "sass:publish", "sass:publishMin", "webpack:dist"]);

	r("default", ["lint", "concurrent:default", "watch"]);
};
