/*eslint-env node*/
const path = require("path");

module.exports = grunt => {

	require("load-grunt-config")(grunt, {
		configPath: path.join(process.cwd(), ".grunt-tasks"),
		pkg: grunt.file.readJSON("package.json"),
		jitGrunt: {
			staticMappings: {
				releaseit: "grunt-release-it"
			}
		}
	});

	// For building before publishing to NPM etc
	grunt.registerTask("dist", ["webfont:dist"]);
};
