module.exports = {
	temp: {
		options: {
			sourceMap: true,
			includePaths: ["src/stylesheets", "node_modules/@nice-digital/icons/dist"],
			outputStyle: "nested",
			sourceMapContents: true
		},
		files: {
			"temp/stylesheets/nice.css": "src/stylesheets/nice-design-system.scss",
			"temp/stylesheets/nice.min.css": "src/stylesheets/nice-design-system.scss"
		}
	},
	dist: {
		options: {
			sourceMap: true,
			includePaths: ["src/stylesheets", "node_modules/@nice-digital/icons/dist"],
			outputStyle: "nested",
			sourceMapContents: true
		},
		files: {
			"dist/stylesheets/nice.css": "src/stylesheets/nice-design-system.scss",
			"dist/stylesheets/nice.min.css": "src/stylesheets/nice-design-system.scss"
		}
	}
};
