/**
 * @module Readme replacer
 *
 * Replaces html comments in the readme with a table of icons
 * from the json file generated from nice-icons.
 */

const fs = require("fs"),
	path = require("path");

// The file path to the readme to edit
const readmePath: string = path.join(__dirname, "../README.md");

// The json file describing the
const font = require("./../dist/nice-icons.json");


const commentRegex: RegExp = /<!-- START icons.*-->([\s\S]*)<!-- END icons .*-->/gm;

const startComment: string = "<!-- START icons generated comment -->\r\n<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->\r\n\r\n";
const endComment: string = "\r\n<!-- END icons generated comment -->";

const tableHead: string = "Icon | Name | Unicode | HTML | SASS \r\n---- | ---- | ---- | ---- | ---- \r\n";

/**
 * Gets table of icons in markdown
 *
 * @returns {string} The new markdown, with table of icons
 */
const getContent = (): string => {
	var tableBody: string = "";

	// Turn list of icons into markdown table
	for (var i = 0; i < font.glyphs.length; i++) {
		var glyph = font.glyphs[i],
			file = font.files[i],
			codepoint = font.codepoints[i],
			image = `<img src="${ file }" alt="${ glyph }" height="50">`,
			html = `\`<span class="icon icon--${ glyph }" aria-hidden="true"></span>\``,
			sass = `\`@include nice-icon(${ glyph });\``;

		tableBody += `${ image } | ${ glyph } | ${ codepoint } | ${ html } | ${ sass } \r\n`;
	}
	return startComment + tableHead + tableBody + endComment;
};

/**
 * Handles reading the readme file contents. Replaces the html comment
 * placeholder with a table of icons.
 *
 * @param {Error} err Error, if any
 * @param {string} readme The contents of the file
 */
const handleReadFile = (err, readme: string) => {
	if(err) throw err;

	readme = readme.replace(commentRegex, getContent());

	saveToFile(readmePath, readme);
};

/**
 * Saves the content back to the given file
 *
 * @param {string} file The path of the file
 * @param {string} readme The file contents to save
 */
const saveToFile = (file: string, readme: string) => {
	fs.writeFile(file, readme, (err) => {
		if (err) throw err;
		console.info(`Replaced ${ font.glyphs.length } icons in ${ file }`);
	});
};

console.info(`Replacing ${ font.glyphs.length } icons in ${ readmePath }`);

fs.readFile(readmePath, "utf8", handleReadFile);
