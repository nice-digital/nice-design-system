var express = require("express"),
	router = express.Router(),
	fs = require("fs"),
	path = require("path"),
	_ = require("lodash");

/// Default route that maps a request path to a template file
/// View-engine agnostic.
router.get("/*", function(req, res, next) {

	if(path.extname(req.path) !== "") {
		next();
		return;
	}

	var app = req.app,
		viewEngineExt = app.get("view engine"),
		basePath = _.trimEnd(req.path, "/"),
		renderedPath,
		views = _.chain([].concat(app.get("views")))
			.map(v => {

				var paths = [
					path.join(v, basePath, `index.${viewEngineExt}`),
					path.join(v, basePath + `.${viewEngineExt}`)
				];

				return req.path.endsWith("/")
					? paths
					: paths.reverse();
			})
			.unzip()
			.flatten()
			.forEach(v => {
				if(fs.existsSync(v)) {
					console.log("rendering", v);
					renderedPath = v;
					res.render(v);
					return false;
				}
			})
			.value();

	if(!renderedPath) {
		console.warn("View could not be found in", views);
		next();
	}

});

module.exports = router;
