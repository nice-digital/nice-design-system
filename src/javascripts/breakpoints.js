/**
 * @module Breakpoints
 */

/**
 * The breakpoints, in pixel values.
 * These correspond with the breakpoints defined in SASS.
 * Often not used directly, but via matchesFrom.
 */
const breakpoints = {
	xs: 400,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1600
};

/**
 * Determines if the device's width matches a min-width query from the given breakpoint.
 *
 * @param {string} breakpointName The breakpoint name
 * @return {Boolean} True if it matches, false otherwise.
 *
 * @example
 * 	import { matchesFrom } from "./breakpoints";
 * 	// Checks if the media query (min-width: 25em) matches
 * 	var matches = matchesFrom("xs");
 */
const matchesFrom = (breakpointName: string) => {
	let breakpointPx = breakpoints[breakpointName];

	if(!breakpointPx) {
		throw new Error(`Breakpoint ${ breakpointName } does not exist`);
	}

	// Assume matchMedia is polyfilled elsewhere
	// Convert to ems to match the media query if the browser's root font-size isn't 16
	return window.matchMedia(`(min-width: ${ breakpointPx / 16 }em)`).matches;
};

export {
	breakpoints as default,
	matchesFrom
};
