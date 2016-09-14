module.exports = {
	publish: {
		options: {
			sourceMap: true,
			includePaths: ["./src/stylesheets"],
			outputStyle: "compressed"
		},
		files: {
			"./dist/stylesheets/experience.min.css": "./src/stylesheets/experience.scss"
		}
	},
	publishMin: {
		options: {
			sourceMap: true,
			includePaths: ["./src/stylesheets"]
		},
		files: {
			"./dist/stylesheets/experience.css": "./src/stylesheets/experience.scss"
		}
	},
	dist: {
		options: {
			sourceMap: true,
			includePaths: ["./src/stylesheets"],
			outputStyle: "compressed"
		},
		files: {
			"./dist/stylesheets/main.css": "./web/client/stylesheets/main.scss"
		}
	},
	dev: {
		options: {
			sourceMap: true,
			includePaths: ["./src/stylesheets"]
		},
		files: {
			"./dist/stylesheets/main.css": "./web/client/stylesheets/main.scss"
		}
	}
};
