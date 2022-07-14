module.exports = {
	name: "nice-icons",
	inputDir: "./src",
	outputDir: "./dist",
	// Note: as of Icons v2.3 we no longer support older browsers so don't generate TTF etc
	fontTypes: ["woff", "woff2"],
	assetTypes: ["css", "scss", "json", "html"],
	formatOptions: {
		json: {
			indent: 2
		}
	},
	templates: {
		scss: "./templates/scss.hbs"
	},
	pathOptions: {
		scss: "./scss/_nice-icons.scss"
	},
	codepoints: {
		// FontAwesome codepoints for backwards compatability
		android: 0xf17b,
		apple: 0xf179,
		"facebook-square": 0xf082,
		"google-plus": 0xf0d5,
		"google-plus-square": 0xf0d4,
		instagram: 0xf16d,
		"linkedin-sign": 0xf08c,
		"question-circle": 0xf059,
		"twitter-square": 0xf081,
		"youtube-play": 0xf16a,
		"youtube-square": 0xf166,
		check: 0xf00c,
		// NICE.Glyphs codepoints for backwards compatability
		// See http://nhsevidence.github.io/NICE.Bootstrap/Guide.Glyphs.html#charset
		calendar: 0xe045,
		"chevron-down": 0xe03c,
		"chevron-left": 0xe03b,
		"chevron-right": 0xe03a,
		"chevron-up": 0xe039,
		comment: 0xf101,
		download: 0xe006,
		"email-closed": 0xe014,
		evidence: 0xe017,
		facebook: 0xe012,
		guidance: 0xe011,
		hamburger: 0xe03d,
		linkedin: 0xf0e1,
		logo: 0xe01a,
		"logo-name": 0xe01b,
		"logo-full": 0xe01c,
		minus: 0xe02a,
		pathways: 0xe005,
		play: 0xe028,
		plus: 0xe027,
		podcast: 0xe00b,
		print: 0xe001,
		readnews: 0xe009,
		remove: 0xe024,
		search: 0xe004,
		share: 0xe008,
		sorting: 0xe021,
		"sorting-asc": 0xe022,
		"sorting-desc": 0xe023,
		standards: 0xe002,
		stop: 0xe043,
		syndication: 0xe013,
		trash: 0xe020,
		twitter: 0xe000,
		user: 0xe01f,
		warning: 0xe04b
	}
};
