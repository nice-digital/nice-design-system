module.exports = {
	dist: {
		src: "src/*.svg",
		dest: "dist",
		destScss: "dist",
		options: {
			autoHint: false,
			customOutputs: [
				{
					template: ".nice-icons.tmpl.js",
					dest: "dist/nice-icons.json"
				}
			],
			engine: "node",
			font: "nice-icons",
			fontFamilyName: "NICE Icons",
			fontFilename: "nice-icons",
			fontHeight: 512,
			normalize: true,
			htmlDemo: false,
			optimize: false,
			relativeFontPath: "/fonts",
			stylesheet: "scss",
			template: ".nice-icons.tmpl.scss",
			types: "eot,woff2,woff,ttf,svg"
		}
	}
};
