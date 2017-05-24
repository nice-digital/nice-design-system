// Compiler for nunjucks templates when using Mocha, based on
// http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/
// and
// https://github.com/at0g/nunjucks-loader/blob/master/index.js.
// Similar to https://github.com/rotundasoftware/nunjucksify
//
// The reason is that templates are loaded with webpack via nunjucks-loader.
// By default Mocha would try and load the template as JS.
// This compiler intercepts the call to require the njk template and does the following:
// 	- Loads the nunjucks template
// 	- Precompiles it
// 	- Compiles a module for the template
//
// This then stops Mocha breaking and code can continue to require templates as normal e.g.:
//
// import template from "./some-template.njk";
// var str = template.render({ some: "data" });

var fs = require("fs"),
	nunjucks = require("nunjucks"),
	orig = require.extensions[".njk"];

require.extensions[".njk"] = function njk(module, filename) {

	// optimization: external code never needs compilation.
	if (filename.indexOf("node_modules/") >= 0) {
		return (orig || require.extensions[".njk"])(module, filename);
	}
	var content = fs.readFileSync(filename, "utf8");

	var env = new nunjucks.Environment();

	var name = "test";

	var nunjucksCompiledStr = nunjucks.precompileString(content, {
		name: name,
		env: env
	});

	nunjucksCompiledStr = nunjucksCompiledStr.replace(/window\.nunjucksPrecompiled/g, "nunjucks.nunjucksPrecompiled");

	var compiledTemplate = "";
	compiledTemplate += "var nunjucks = require(\"nunjucks\");\n";
	compiledTemplate += "var env;\n";
	compiledTemplate += "if (!nunjucks.currentEnv){\n";
	compiledTemplate += "\tenv = nunjucks.currentEnv = new nunjucks.Environment([], { autoescape: true });\n";
	compiledTemplate += "} else {\n";
	compiledTemplate += "\tenv = nunjucks.currentEnv;\n";
	compiledTemplate += "}\n";
	compiledTemplate += nunjucksCompiledStr + ";\n";
	compiledTemplate += "var src = { obj: nunjucks.nunjucksPrecompiled[\"" + name + "\"], type: \"code\" };\n\n";
	compiledTemplate += "module.exports = new nunjucks.Template(src, env)";

	return module._compile(compiledTemplate, filename);
};
