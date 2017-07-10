module.exports = {
	default : {
		src: [
			"src/javascripts/**/*.js",
			"src/components/**/*.js",
			"!src/components/**/*.test.js"
		],
		options: {
			destination: "./dist/docs/js",
			format: "json",
			filename: "nice-design-system.json"
		}
	}
};
