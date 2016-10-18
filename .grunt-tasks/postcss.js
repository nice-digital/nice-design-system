module.exports = {
	options: {
		map: true,
		processors: [
			require("pixrem")(), // add fallbacks for rem units
			require("autoprefixer")({ browsers: "last 2 versions" }), // add vendor prefixes
		]
	},
	default: {
		src: "./dist/stylesheets/*.css"
	}
};
