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
				"facebook-square": 0xf082,
				"linkedin-sign": 0xf08c,
				"youtube-play": 0xf16a,
				"youtube-square": 0xf166,
				// NICE.Glyphs codepoints for backwards compatability
				// See http://nhsevidence.github.io/NICE.Bootstrap/Guide.Glyphs.html#charset
				calendar: 0xe045,
				"chevron-up": 0xe039,
				download: 0xe006,
				evidence: 0xe017,
				facebook: 0xe012,
				guidance: 0xe011,
				hamburger: 0xe03d,
				linkedin: 0xf0e1,
				logo: 0xe01a,
				"logo-name": 0xe01b,
				minus: 0xe02a,
				pathways: 0xe005,
				plus: 0xe027,
				print: 0xe001,
				readnews: 0xe009,
				search: 0xe004,
				share: 0xe008,
				standards: 0xe002,
				syndication: 0xe013,
				trash: 0xe020,
				twitter: 0xe000,
				user: 0xe01f,
				warning: 0xe04b
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
