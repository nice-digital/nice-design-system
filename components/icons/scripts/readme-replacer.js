/**
 * @module Readme replacer
 *
 * Replaces html comments in the readme with a table of icons
 * from the json file generated from nice-icons.
 */

const fs = require("fs"),
	path = require("path");

// The file path to the readme to edit
const readmePath = path.join(__dirname, "../README.md");

// The json file describing the
const font = require("./../dist/nice-icons.json");

const commentRegex = /<!-- START icons.*-->([\s\S]*)<!-- END icons .*-->/gm;

const startComment =
	"<!-- START icons generated comment -->\r\n<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->\r\n\r\n";
const endComment = "\r\n<!-- END icons generated comment -->";

const tableHead =
	"Icon | Name | Unicode | HTML | SCSS \r\n---- | ---- | ---- | ---- | ---- \r\n";

const iconNames = Object.keys(font).sort((a, b) => a.localeCompare(b));

/**
 * Gets table of icons in markdown
 *
 * @returns {string} The new markdown, with table of icons
 */
const getContent = () => {
	var tableBody = "";

	// Turn list of icons into markdown table
	for (var i = 0; i < iconNames.length; i++) {
		var glyph = iconNames[i],
			codepoint = font[glyph].toString(16),
			image = `<img src="src/${glyph}.svg" alt="${glyph}" height="50">`,
			html = `\`<span class="icon icon--${glyph}" aria-hidden="true"></span>\``,
			sass = `\`@include nice-icon(${glyph});\``;

		tableBody += `${image} | ${glyph} | ${codepoint} | ${html} | ${sass} \r\n`;
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
const handleReadFile = (err, readme) => {
	if (err) throw err;

	readme = readme.replace(commentRegex, getContent());

	saveToFile(readmePath, readme);
};

/**
 * Saves the content back to the given file
 *
 * @param {string} file The path of the file
 * @param {string} readme The file contents to save
 */
const saveToFile = (file, readme) => {
	fs.writeFile(file, readme, err => {
		if (err) throw err;
		console.info(`Replaced ${iconNames.length} icons in ${file}`);
	});
};

console.info(`Replacing ${iconNames.length} icons in ${readmePath}`);

fs.readFile(readmePath, "utf8", handleReadFile);
