module.exports = {
	temp: {
		options: {
			sourceMap: true,
			includePaths: ["src/stylesheets"],
			outputStyle: "nested",
			sourceMapContents: true
		},
		files: {
			"temp/stylesheets/nice.css": "src/stylesheets/index.scss",
			"temp/stylesheets/nice.min.css": "src/stylesheets/index.scss"
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
			"dist/stylesheets/nice.css": "src/stylesheets/index.scss",
			"dist/stylesheets/nice.min.css": "src/stylesheets/index.scss"
		}
	}
};
