var nunjucks = require("nunjucks");

/// A custom tag for showing a code example.
/// @see {@link https://mozilla.github.io/nunjucks/api.html#custom-tags)
///
/// It outputs the markup alongisde an HTML encoded version of the markup for
/// displaying as an example code.
///
/// @example <caption>Example usage</caption>
/// 	{% example "html" -%}
/// 		<h1>Heading 1</h1>
/// 		<h2>Heading 2</h2>
/// 		{%- endexample %}
/// 	{%- endexample %}
function ExampleExtension() {
	this.tags = ["example"];

	this.parse = function(parser, nodes) {
		// get the tag token
		var tok = parser.nextToken();

		// parse the args and move after the block end. passing true
		// as the second arg is required if there are no parentheses
		var args = parser.parseSignature(null, true);

		// Workaround - see https://github.com/mozilla/nunjucks/issues/158
		if (args.children.length == 0)
			args.addChild(new nodes.Literal(0, 0, ""));

		parser.advanceAfterBlockEnd(tok.value);

		// parse the body and possibly the error block, which is optional
		var body = parser.parseUntilBlocks("endexample");
		parser.advanceAfterBlockEnd();

		// See above for notes about CallExtension
		return new nodes.CallExtension(this, "run", args, [body]);
	};

	this.run = function(context, language, body) {

		var data = {
			body: body(),
			lang: language || ""
		};

		return new nunjucks.runtime.SafeString(nunjucks.render("partials/example.njk", data));
	};
}

module.exports = function(env) {
	env.addExtension("ExampleExtension", new ExampleExtension());
};
