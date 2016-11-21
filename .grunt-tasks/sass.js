module.exports = {
	dev: {
		options: {
			sourceMap: true,
			includePaths: ["src/stylesheets"],
			outputStyle: "nested",
			sourceMapContents: true
		},
		files: {
			"dist/stylesheets/experience.css": "src/stylesheets/experience.scss"
		}
	},
	publishMin: {
		options: {
			sourceMap: true,
			includePaths: ["src/stylesheets"],
			outputStyle: "compressed"
		},
		files: {
			"dist/stylesheets/experience.min.css": "src/stylesheets/experience.scss"
		}
	}
};
