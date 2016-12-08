module.exports = {
	icons: {
		src: "src/icons/*.svg",
		dest: "dist/fonts",
		destScss: "src/stylesheets/typography",
		options: {
			autoHint: false,
			customOutputs: [
				{
					template: "src/icons/.nice-icons.tmpl.js",
					dest: "dist/docs/fonts/nice-icons.json"
				}
			],
			engine: "node",
			font: "typography-icons",
			fontFamilyName: "NICE Icons",
			fontFilename: "nice-icons",
			fontHeight: 512,
			normalize: true,
			htmlDemo: false,
			optimize: false,
			relativeFontPath: "/fonts",
			stylesheet: "scss",
			template: "src/icons/.nice-icons.tmpl.scss",
			types: "eot,woff2,woff,ttf,svg"
		}
	}
};
