/*eslint-env node*/
var express = require("express"),
	path = require("path"),
	fs = require("fs"),
	_ = require("lodash"),
	nunjucks = require("nunjucks"),
	favicon = require("serve-favicon"),
	errors = require("node-common-errors");

var filters = require("./nunjucks/filters");

var PORT = process.env.PORT || 3000;
var app = express();

// Express
app.set("port", PORT);
app.set("views", path.join( __dirname, "/views") );
app.set("view engine", "njk");
app.set("x-powered-by", false);


// Nunjucks view engine
var env = nunjucks.configure(path.join( __dirname, "/views") , {
	autoescape: true,
	noCache: true,
	express: app
});

// Nunjucks custom filters
for(var name in filters) {
	env.addFilter(name, filters[name]);
}
// Extensions
require("./nunjucks/example-extension")(env);
require("./nunjucks/source-extension")(env);

app.use(function (req, res, next) {
	res.locals.req = req;
	next();
});

// Serve favicon with caching
app.use(favicon(path.join( __dirname, "./../../src/assets/favicon.ico")));

// Minify HTML (strip whitespace) for a) speed & b) grid system
app.use(require("./middlewares/render-minified"));


// Routes and middleware
app.use(express.static("dist"));
app.use(require("./controllers"));


// Error routes
app.use(function (req, res, next) {
	throw new errors.NotFound("Page not found.");
});
app.use(function (err, req, res, next) {
	if (err instanceof errors.NotFound) {
		res.status(404).render("404", { error: err });
	} else {
		res.status(500).render("500", { error: err });
	}
});


app.listen(app.get("port"), function(){
	console.log("Express server listening on port " + app.get("port"));
});

module.exports = app;
