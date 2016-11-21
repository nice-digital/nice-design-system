module.exports = {
	options: {
		map: true,
		processors: [
			require("pixrem")(), // add fallbacks for rem units for IE8+
			require("autoprefixer")({ browsers: "> 1%, last 2 versions, ie >= 8" }), // add vendor prefixes
		]
	},
	default: {
		src: "dist/stylesheets/*.css"
	}
};
