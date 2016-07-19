var minifier = require("html-minifier");

/**
* Render with minified HTML (express + nunjucks)
*   Works as a response.method that minifies html string
*   after nunjucks.render compiles and callback
*
* See https://gist.github.com/marcusgadbem/ddde8a7ad302134e2c18
* @param {String} view
* @param {Object} options
*/
module.exports = exports = function(req, res, next) {
	res.oldRender = res.render;
	res.render = function(view, options) {
		this.oldRender(view, options, function(err, html) {
			if (err) throw err;
			html = minifier.minify(html, {
				collapseWhitespace: true
			});
			res.send(html);
		});
	};
	next();
};
