var chroma = require("chroma-js"),
	_ = require("lodash"),
	nunjucksFilters = require("nunjucks/src/filters");

/// Nunjucks filters
/// @see {@link https://mozilla.github.io/nunjucks/api.html#custom-filters}
/// @see {@link https://github.com/mozilla/nunjucks/blob/master/src/filters.js}
/// Adapted from https://github.com/Upstatement/sassdoc-theme-upbase/blob/master/src/swig.js

const normalize = (value, defaultValue) =>
	(value === null || value === undefined || value === false) ? defaultValue : value;

const yiq = ([red, green, blue]) =>
  ((red * 299) + (green * 587) + (blue * 114)) / 1000;

const yiqContrast = rgb =>
  (yiq(rgb) >= 128) ? "#000" : "#fff";

const getChannel = (start, hex) =>
  parseInt(hex.substr(start, 2), 16);

const hexToRgb = hex =>
  [0, 2, 4].map(x => getChannel(x, hex));

const colorToHex = color =>
  chroma(color).hex().substr(1);

const isColor = colVal => {
	try {
		chroma(colVal);
		return true;
	} catch (e) {
		return false;
	}
};

var filters = {

	/// Lowercases a given string
	/// @param {string} a The string to lowercase
	/// @example
	/// 	{# Lowercase the message variable #}
	/// 	{{ message|lower }}
	//lower: str => typeof str === "undefined" ? "" : str.toLowerCase();

	/// Return true if the given property is present on the given object; otherwise false
	/// @param {string} prop The name of the property
	/// @param {object} obj The object on which to look
	"in": (prop, obj) => prop in obj,

	/// Returns true if the given value is a valid colour
	/// @param {string} colVal A possible colour value
	is_color: isColor,


	/// Normalises indentation within a block of HTML.
	/// i.e. looks for the smallest number of tabs and subtracts from each line
	normalise_indentation: body => {
		body = normalize(body, "");

		// Ignore any empty lines
		var bodyLines = _(body.split(/\r?\n/))
			.reject(l => /^\s?$/.test(l));

		// Remove tabs from start of first line - we always want to start indented at the correct point
		bodyLines = bodyLines.map((l, i) => i > 0 ? l : l.replace(/^\t+/, ""));

		// Find all the tabbed lines
		var tabbedLines = bodyLines
			.map(l => l.search(/\S/))
			.without(0);

		if(tabbedLines.length <= 1)
			return tabbedLines.join("\n");

		// Find the smallest number of tabs at the start of a line
		// We'll use this to normalise tabs
		var minTabs = tabbedLines
			.min();

		// Remove the extra tabs and re-combine into a string for display
		var newBody = bodyLines
			.map(l => l.replace(new RegExp(`^\\t{${minTabs}}`, "g"), ""))
			.join("\n");

		return newBody;
	},


	/// Adapted from SASS Doc"s filter
	/// @see {@link https://github.com/SassDoc/sassdoc-theme-default/commit/1c257ee63d8d935a2134bf93650ed1c59167e9a3}
	display_as_type: str => {
		str = normalize(str, "");
		return _(str.split("|"))
			.map(s => _.trim(s))
			.map(nunjucksFilters.capitalize)
			.join("</code> or <code>");
	},


	/// Normalises a CSS color, then uses the YIQ algorithm to get the correct contrast.
	/// @param {String} color
	/// @return {String} `#000` or `#fff` depending on which one is a better.
	/// @see {@link http://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area}
	/// @see {@link https://github.com/SassDoc/sassdoc-theme-default/blob/master/src/swig.js}
	yiq: color =>
		isColor(color) ?
		yiqContrast(hexToRgb(colorToHex(color))) :
		"#000",

	/// Pluralizes the given string
	pluralize: str => {
		str = normalize(str, "");
		return str.endsWith("s") ? str : str + "s";
	}
};

module.exports = filters;
