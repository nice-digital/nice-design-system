var _ = require("lodash"),
	nunjucks = require("nunjucks");

/// A custom tag for showing code source, without an example.
/// @see {@link https://mozilla.github.io/nunjucks/api.html#custom-tags)
///
/// It outputs HTML encoded version of the markup for displaying as an example code.
///
/// @example <caption>Example usage</caption>
/// 	{% source "scss", "This is a heading" -%}
/// 		$purple: #82176f;
/// 	{%- endsource %}
function SourceExtension() {
	this.tags = ["source"];

	this.parse = function(parser, nodes, lexer) {
		// get the tag token
		var tok = parser.nextToken();

		// parse the args and move after the block end. passing true
		// as the second arg is required if there are no parentheses
		var args = parser.parseSignature(null, true);

		// Workaround if there are no args - see https://github.com/mozilla/nunjucks/issues/158
		if (args.children.length == 0)
			args.addChild(new nodes.Literal(0, 0, ""));

		// Heading is optional - so need to add an empty node if it's not there
		if (args.children.length == 1)
			args.addChild(new nodes.Literal(0, 0, ""));

		parser.advanceAfterBlockEnd(tok.value);

		// parse the body and possibly the error block, which is optional
		var body = parser.parseUntilBlocks("expanded", "endsource");

		var expandedBody = null;

		if(parser.skipSymbol("expanded")) {
			parser.skip(lexer.TOKEN_BLOCK_END);
			expandedBody = parser.parseUntilBlocks("endsource");
		}

		parser.advanceAfterBlockEnd();

		// See above for notes about CallExtension
		return new nodes.CallExtension(this, "run", args, [body, expandedBody]);
	};

	this.run = function(context, language, heading, body, expandedBody) {

		var data = {
			body: body(),
			expandedBody: _.isFunction(expandedBody) ? expandedBody() : null,
			lang: language || "",
			heading: heading
		};

		return new nunjucks.runtime.SafeString(nunjucks.render("partials/source.njk", data));
	};
}

module.exports = function(env) {
	env.addExtension("SourceExtension", new SourceExtension());
};
