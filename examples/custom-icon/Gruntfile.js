const path = require("path");

module.exports = grunt => {

	grunt.initConfig({
		// Run the webfont command as part of your build process
		// Use custom templates if you need more control e.g. for generating SCSS instead of CSS.
		// See https://github.com/sapegin/grunt-webfont for the options
		webfont: {
			dist: {
				src: [
					"./icons/*.svg",
					"./node_modules/@nice-digital/icons/src/**/*.svg"
				],
				dest: "./dist/",
				options: {
					autoHint: false,
					engine: "node",
					font: "app-icons",
					fontFamilyName: "App Icons",
					fontFilename: "app-icons",
					fontHeight: 512,
					normalize: true,
					optimize: false,
					types: "eot,woff2,woff,ttf,svg",
					templateOptions: {
						baseClass: "icon",
						classPrefix: "icon--"
					}
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-webfont");

	grunt.registerTask("default", ["webfont"]);
};
