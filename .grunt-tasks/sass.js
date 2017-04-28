module.exports = {
	temp: {
		options: {
			sourceMap: true,
			includePaths: ["src/stylesheets"],
			outputStyle: "nested",
			sourceMapContents: true
		},
		files: {
			"temp/stylesheets/experience.css": "src/stylesheets/experience.scss",
			"temp/stylesheets/experience.min.css": "src/stylesheets/experience.scss"
		}
	},
	dist: {
		options: {
			sourceMap: true,
			includePaths: ["src/stylesheets"],
			outputStyle: "nested",
			sourceMapContents: true
		},
		files: {
			"dist/stylesheets/experience.css": "src/stylesheets/experience.scss",
			"dist/stylesheets/experience.min.css": "src/stylesheets/experience.scss"
		}
	}
};
