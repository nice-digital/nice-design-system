const grunt = require("grunt"),
	path = require("path");

// Sorts
var basePathSorter = (a, b) =>
	path.basename(a).localeCompare(path.basename(b));

// Gets SVG source files to use within the icon font.
// We use this because the natural order includes sub folder in the path
var getFiles = () =>
	grunt.file.expand("src/**/*.svg").sort(basePathSorter);

const codepoints = require("./../src/codepoints");

module.exports = {
	dist: {
		src: getFiles(),
		dest: "dist",
		destScss: "dist",
		options: {
			autoHint: false,
			codepoints: codepoints,
			customOutputs: [
				{
					template: "templates/nice-icons.tmpl.js",
					dest: "dist/nice-icons.json"
				}
			],
			engine: "node",
			font: "nice-icons",
			fontFamilyName: "NICE Icons",
			fontFilename: "nice-icons",
			fontHeight: 512,
			normalize: true,
			htmlDemo: true,
			htmlDemoTemplate: "templates/nice-icons.tmpl.html",
			htmlDemoFilename: "demo",
			destHtml: "./dist/",
			optimize: false,
			relativeFontPath: "/fonts",
			stylesheet: "scss",
			template: "templates/nice-icons.tmpl.scss",
			templateOptions: {
				baseClass: "icon",
				classPrefix: "icon--"
			},
			types: "eot,woff2,woff,ttf,svg"
		}
	}
};
