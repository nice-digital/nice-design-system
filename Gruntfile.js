/*eslint-env node*/
var path = require("path");

module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);
	require("load-grunt-config")(grunt, {
		configPath: path.join(process.cwd(), ".grunt-tasks"),
		pkg: grunt.file.readJSON("package.json")
	});

	var r = grunt.registerTask;

	// Lint both SASS and JS
	r("lint", ["sasslint", "eslint"]);

	// Generate documentation form comments in SASS and JS
	r("docs", ["sassdoc", "documentation"]);

	// Build in dev mode
	r("build", ["modernizr", "sass:dev", "webpack"]);

	// Serve the app and watch for changes
	r("serve", ["express"/*, "open"*/, "parallel:watch"]);

	// For deploying the web app. Builds minified SASS/JS
	r("dist", ["clean", "sass:dist", "webpack"]);

	// For building before publishing to NPM etc
	r("publish", ["clean", "sass:publish", "sass:publishMin", "webpack"]);

	r("default", ["lint", "docs", "build", "serve"]);
};
