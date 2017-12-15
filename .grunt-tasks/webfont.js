module.exports = {
	dist: {
		src: "src/*.svg",
		dest: "dist",
		destScss: "dist",
		options: {
			autoHint: false,
			codepoints: {
				// FontAwesome codepoints for backwards compatability
				android: 0xf17b,
				apple: 0xf179,
				// NICE.Glyphs codepoints for backwards compatability
				evidence: 0xe017,
				guidance: 0xe011,
				logo: 0xe01a,
				"logo-name": 0xe01b,
				pathways: 0xe005,
				standards: 0xe002,
				syndication: 0xe013
			},
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
			htmlDemo: true,
			htmlDemoTemplate: ".nice-icons.tmpl.html",
			htmlDemoFilename: "demo",
			destHtml: "./dist/",
			optimize: false,
			relativeFontPath: "/fonts",
			stylesheet: "scss",
			template: ".nice-icons.tmpl.scss",
			templateOptions: {
				baseClass: "icon",
				classPrefix: "icon--"
			},
			types: "eot,woff2,woff,ttf,svg"
		}
	}
};
