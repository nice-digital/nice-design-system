/* eslint-env node, mocha */

/**
 * @module  Test helpers
 * A suite of test helpers and utility methods
 */

const fs = require("fs"),
	path = require("path"),
	nunjucks = require("nunjucks");

/**
 * Loads and renders a component template from the given name, with the given data.
 * Assumes that the component had a macro inside with the same name as the component.
 * @param  {String} name The name  of the component to load
 * @param  {Object} data The data to pass to the view
 * @return {String}      The rendered component
 */
function renderComponent(name, data) {
	var template = fs.readFileSync(path.join(__dirname, "../web/server/views/partials/components/" + name + ".njk"), "utf8");
	return nunjucks.renderString(`${ template}{{ ${ name }(content) }}"`, { content: data });
}

module.exports = {
	renderComponent: renderComponent
};
