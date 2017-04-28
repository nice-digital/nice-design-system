const moment = require("moment"),
	_ = require("lodash");

const pkg = require("./../package.json"),
	banner = _.template(pkg.config.banner)({
		version: pkg.version,
		date: moment().format("YYYY-MM-DD"),
		year: moment().format("YYYY") });

module.exports = {
	options: {
		map: true,
		processors: [
			require("pixrem")({ html: false, atrules: true }), // add fallbacks for rem units for IE8+
			require("autoprefixer")({ browsers: "> 1%, last 2 versions, ie >= 8" }), // add vendor prefixes
			require("postcss-banner")({ banner: banner, important: true })
		]
	},
	dist: {
		src: "dist/stylesheets/*.css"
	},
	temp: {
		src: "temp/stylesheets/*.css"
	}
};
