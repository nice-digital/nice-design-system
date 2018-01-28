/* eslint-env node, mocha */

/**
 * @module  Test helpers
 * A suite of test helpers and utility methods
 */

const fs = require("fs"),
	path = require("path"),
	nunjucks = require("nunjucks"),
	jsdom = require("jsdom");

const { JSDOM } = jsdom;

/**
 * Loads and renders a component template from the given name, with the given data.
 * Assumes that the component had a macro inside with the same name as the component.
 * @param  {String} name The name  of the component to load
 * @param  {Object} data The data to pass to the view
 * @return {String}      The rendered component
 */
function renderComponent(name, data) {
	var template = fs.readFileSync(path.join(__dirname, `../src/components/${ name }/${ name }.njk`), "utf8");
	return nunjucks.renderString(`${ template}{{ ${ $.camelCase(name) }(content) }}"`, { content: data });
}

/**
 * Constructs a fake DOM.
 * return     {Object} The setup values
 */
function setupDOM() {
	const setupValues = {};

	// Setup jsdom for faking dom and jquery
	const dom = new JSDOM("<!doctype html><html><head><title>Test</title></head><body><div id='main'></div></body></html>");
	setupValues.window = dom.window;
	setupValues.document = dom.window.document;

	// Loading jQuery doesn't work with ES6 import
	// jQuery works with the window object from above
	setupValues.jQuery = setupValues.$ = require("jquery")(setupValues.window);

	// Copy HTML elements to global scope, for use in flow type annotations
	setupValues.HTMLElement = setupValues.window.HTMLElement;
	setupValues.HTMLHeadingElement = setupValues.window.HTMLHeadingElement;

	// 'Fake matchMedia for use in jsdom
	setupValues.window.matchMedia = setupValues.window.matchMedia || function() {
		return {
			matches: false,
			addListener: () => {},
			removeListener: () => {}
		};
	};

	// Copy values to the global scope, e.g. $ etc
	for (var key in setupValues) {
		global[key] = setupValues[key];
	}

	return setupValues;
}

module.exports = {
	renderComponent: renderComponent,
	setupDOM: setupDOM
};
