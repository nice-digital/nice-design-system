/**
 * @module Utils
 * Utility functions
 */

/**
 * Trims whitespace characters from the start and end of a string.
 * This utility method exists because String.prototype.trim is
 * not supported in IE8.
 *
 * @param {string} str The string to trim
 */
export const trim = function (str: string) {
	return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};

/**
 * Throttle events
 * See https://remysharp.com/2010/07/21/throttling-function-calls
 *
 * @param      {Function}  func       The function to throttle
 * @param      {Integer}  threshold  The threshold period, in milliseconds
 * @param      {Object}  scope   The context of the throttled function
 * @return     {Function}  { The throttled function }
 */
export const throttle = function (
	fn: Function,
	threshold: number = 100,
	scope: Object | null = null
) {
	let last: number, deferTimer: ReturnType<typeof setTimeout>;

	return function throttled() {
		let context = scope || this,
			now = +new Date(),
			args = arguments;

		if (last && now < last + threshold) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, threshold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
};

/**
 * Debounce
 * See http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 *
 * @param      {Function}  func       The function to debounce
 * @param      {boolean}  execAsap   Whether to execute the function now
 * @param      {Integer}  threshold  The detection period, in milliseconds
 * @param      {Object}  scope  The context for the debounced function
 * @return     {Function}  { The debounced function }
 */
export const debounce = function (
	func: Function,
	execAsap: boolean = false,
	threshold: number = 100,
	scope: Object | null = null
) {
	let timeout: ReturnType<typeof setTimeout> | null;

	return function debounced() {
		let context = scope || this,
			args = arguments;

		function delayed() {
			if (!execAsap) func.apply(context, args);
			timeout = null;
		}

		if (timeout) clearTimeout(timeout);
		else if (execAsap) func.apply(context, args);

		timeout = setTimeout(delayed, threshold);
	};
};

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
export const slugify = (str: string) => {
	return trim(str)
		.toLowerCase()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/&/g, "-and-") // Replace & with 'and'
		.replace(/[^\w-]+/g, "") // Remove all non-word chars
		.replace(/^-+/g, "") // Trim dashes from the start
		.replace(/-+$/g, "") // Trim dashes from the end
		.replace(/-{2,}/g, "-"); // Replace multiple - with single -
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
export const nextUniqueId = (function (i: number) {
	return function (prefix: string = "uid") {
		return `${prefix}-${++i}`;
	};
})(0);

/**
 * CamelCases a  string
 * @param {string} str The string to camel case
 */
export const camelCase = function (str: string) {
	str = str.split("-").join(" "); // To support kebab-case
	// See https://stackoverflow.com/a/2970667/486434
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter: string, index: number) {
			return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
		})
		.replace(/\s+/g, "");
};

export const isValidHeadingLevel = (level: number) => {
	return Number.isInteger(level) && level >= 1 && level <= 6;
};

export default {
	throttle,
	debounce,
	slugify,
	nextUniqueId,
	camelCase,
	isValidHeadingLevel
};
