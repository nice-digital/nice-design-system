/*eslint-env node*/
var compression = require("compression"),
	errors = require("node-common-errors"),
	express = require("express"),
	favicon = require("serve-favicon"),
	nunjucks = require("nunjucks"),
	moment = require("moment"),
	path = require("path"),
	webpack = require("webpack"),
	webpackMiddleware = require("webpack-dev-middleware");

const webpackConfig = require("./../webpack.config.js");

var PORT = process.env.PORT || 3000;
var app = express();

process.title = "Experience";

// Express
app.set("port", PORT);
app.set("views", path.join( __dirname, "./views") );
app.set("view engine", "njk");
app.set("x-powered-by", false);


// Nunjucks view engine
var env = nunjucks.configure([path.join(__dirname, "./views"), path.join(__dirname, "../src/components/")], {
	autoescape: true,
	noCache: true,
	express: app
});

app.use(compression());

app.use(function(req, res, next) {
	res.header("X-UA-Compatible", "IE=edge");
	next();
});

app.use(function (req, res, next) {
	res.locals.req = req;
	res.locals.moment = moment;
	next();
});

// Serve favicon with caching
app.use(favicon(path.join(__dirname, "../src/assets/favicon.ico")));

// Webpack
var compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, { publicPath: "/javascripts/" }));

// Static assets
app.use("/fonts", express.static(path.join(__dirname, "../temp/fonts")));
app.use(express.static(path.join(__dirname, "../temp")));
app.use(express.static(path.join(__dirname, "../src/assets")));

// Routes and middleware
app.use(require("./controllers"));


// Error routes
/*eslint-disable no-unused-vars*/
app.use(function (req, res, next) {
	throw new errors.NotFound("Page not found.");
});
/*eslint-disable no-unused-vars*/
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
