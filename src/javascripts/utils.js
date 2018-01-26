/**
 * @module Utils
 * Utility functions
 */

/**
 * Turns a string into a slug.
 * See {@link https://gist.github.com/mathewbyrne/1280286#gistcomment-1606270|this gist}.
 *
 * @param {string} str { The string to slugify }
 * @returns {string} { The slugified string }
 *
 * @example <caption>Example slugifying</caption>
 *          import { slugify } from "./utils";
 *          // returns "a-string-to-transform-and-slugify"
 *          slugify("A (string) to transform & slugify!");
 */
export const slugify = (str: string): string => {
	return str.toLowerCase().trim()
		.replace(/\s+/g, "-")			// Replace spaces with -
		.replace(/&/g, "-and-")			// Replace & with 'and'
		.replace(/[^\w-]+/g, "")		// Remove all non-word chars
		.replace(/^-+/g, "")			// Trim dashes from the start
		.replace(/-+$/g, "")			// Trim dashes from the end
		.replace(/-{2,}/g, "-");		// Replace multiple - with single -
};

/**
 * Turns a dashed string into a camelCase string.
 * See {@link https://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/|this page}.
 *
 * @param {string} str { The dashed string to camelCase }
 * @returns {string} { The camelCased string }
 *
 * @example <caption>Example dashToCamel</caption>
 *          import { dashToCamel } from "./utils";
 *          // returns "somethingInCamelcase"
 *          dashToCamel("something-in-camelcase");
 */
export const dashToCamel = (str: string): string => {
	return str.replace(/(-[a-z])/g, function($1){return $1.toUpperCase().replace("-","");});
};

/**
 * Generates a unique id in the form prefix-n by incrementing a counter.
 * The first time this is called it will return "uid-1" then "uid-2" and so on.
 * See {@link http://stackoverflow.com/a/20302361|This StackOverflow answer}.
 *
 * @param {string} prefix { The prefix for the id to return. Defaults to "uid" }
 * @return {string} { The unique id }
 *
 * @example <caption>Simple example</caption>
 *          import { nextUniqueId } from "./utils";
 *          // returns "uid-1"
 *          nextUniqueId();
 *
 * @example <caption>Prefix example</caption>
 *          import utils from "./utils";
 *          // returns "prefix-1"
 *          utils.nextUniqueId("prefix");
 */
export const nextUniqueId = function (i) {
	return function (prefix = "uid") {
		return `${ prefix }-${ ++i }`;
	};
}(0);

export default {
	dashToCamel,
	slugify,
	nextUniqueId
};
