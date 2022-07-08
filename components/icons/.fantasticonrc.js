module.exports = {
	inputDir: "./src", // (required)
	outputDir: "./dist", // (required)
	fontTypes: ["ttf", "woff", "woff2"],
	assetTypes: ["ts", "css", "json", "html"],
	fontsUrl: "/static/fonts",
	formatOptions: {
		// Pass options directly to `svgicons2svgfont`
		woff: {
			// Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
			metadata: "..."
		},
		json: {
			// render the JSON human readable with two spaces indentation (default is none, so minified)
			indent: 2
		},
		ts: {
			// select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
			types: ["constant", "literalId"],
			// render the types with `'` instead of `"` (default is `"`)
			singleQuotes: true
		}
	},
	// Use a custom Handlebars template
	templates: {
		//css: "./my-custom-tp.css.hbs"
	},
	pathOptions: {
		//ts: "./dist/types/icon-types.ts",
		//json: "./dist/icon-codepoints.json"
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
	},
	// Customize generated icon IDs (unavailable with `.json` config file)
	getIconId: ({
		basename, // `string` - Example: 'foo';
		relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
		absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
		relativeFilePath, // `string` - Example: 'foo.svg'
		index // `number` - Example: `0`
	}) => [index, basename].join("_") // '0_foo'
};
