const regex = /<!-- START icons.*-->([\s\S]*)<!-- END icons/gm;

module.exports = {
	options: {
	},
	readme: {
		options: {
			patterns: [
				{
					match: regex,
					replacement: function(match, p1) {
						console.log(font);

						var font = require("./../dist/nice-icons.json");

						var icons = "";

						for (var i = 0; i < font.glyphs.length; i++) {
							var glyph = font.glyphs[i],
								file = font.files[i];

							icons += `- ![${ glyph }](${ file } | width=100) ${ glyph } \r\n`;
						}

						console.log(icons);


						return `<!-- START icons -->\r\n${ icons }\r\n<!-- END icons`;
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
