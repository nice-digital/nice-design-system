/**
 * SassDoc filters (providing Markdown and other helpers).
 *
 * See <https://github.com/SassDoc/sassdoc-filter>.
 */
//var filter = require("sassdoc-filter");

/**
 * SassDoc indexer module, to index data with a certain granularity.
 *
 * See <https://github.com/SassDoc/sassdoc-indexer>.
 */
//var indexer = require("sassdoc-indexer");

/**
 * Utility function we will use to merge a default configuration
 * with the user object.
 */
var extend = require("extend");

var sassdocExtras = require("sassdoc-extras");

var path = require("path");
var fs = require("fs");

var def = JSON.parse(fs.readFileSync(".sassdocrc", "utf8"));

const applyDefaults = ctx =>
	extend({}, def, ctx, {
		groups: extend(def.groups, ctx.groups),
		display: extend(def.display, ctx.display),
	});

module.exports = function (dest, ctx) {
	ctx = applyDefaults(ctx);
	sassdocExtras(ctx,
		"description",
		"markdown",
		"display",
		"groupName",
		"shortcutIcon",
		"sort",
		"resolveVariables"
	);

	ctx.data = {
		display: ctx.display,
		items: ctx.data,
		groups: ctx.groups,
		byGroupAndType: sassdocExtras.byGroupAndType(ctx.data)
	};

	fs.writeFileSync(path.join(dest, "nice-design-system.json"), JSON.stringify(ctx.data, null, 2), "utf-8");

	return new Promise(function(resolve, reject) { resolve(); });
};
