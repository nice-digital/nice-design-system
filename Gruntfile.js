/*eslint-env node*/
var path = require("path");

module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);
	require("load-grunt-config")(grunt, {
		configPath: path.join(process.cwd(), ".grunt-tasks"),
		pkg: grunt.file.readJSON("package.json")
	});

	var r = grunt.registerTask;

	r("lint", ["sasslint", "eslint"]);
	r("docs", ["sassdoc", "documentation"]);
	r("build", ["modernizr", "sass", "webpack"]);
	r("serve", ["express", "open", "parallel:watch"]);

	r("default", ["lint", "docs", "build", "serve"]);
};
