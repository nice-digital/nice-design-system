const regex = /<!-- START icons.*-->([\s\S]*)<!-- END icons .*-->/gm,
	startComment = "<!-- START icons generated comment -->\r\n<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->\r\n\r\n",
	endComment = "\r\n<!-- END icons generated comment -->";

module.exports = {
	options: {
	},
	readme: {
		options: {
			patterns: [
				{
					match: regex,
					replacement: function(match, p1) {

						var font = require("./../dist/nice-icons.json");

						var iconTable = "Icon | Name | Unicode | HTML | SASS \r\n";
						iconTable += "---- | ---- | ---- | ---- | ---- \r\n";

						// Turn list of icons into markdown table
						for (var i = 0; i < font.glyphs.length; i++) {
							var glyph = font.glyphs[i],
								file = font.files[i],
								codepoint = font.codepoints[i],
								image = `<img src="${ file }" alt="${ glyph }" height="50">`,
								html = `\`<span class="icon icon--${ glyph }" aria-hidden="true"></span>\``,
								sass = `\`@include nice-icon(${ glyph });\``;

							iconTable += `${ image } | ${ glyph } | ${ codepoint } | ${ html } | ${ sass } \r\n`;
						}

						return `${ startComment }${ iconTable }${ endComment }`;
					}
				}
			]
		},
		files: [
			{
				flatten: false,
				src: "README.md",
				dest: "./"
			}
		]
	}
};
