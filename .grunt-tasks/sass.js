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
			"./dist/stylesheets/app.css": "./web/client/stylesheets/app.scss"
		}
	},
	dev: {
		options: {
			sourceMap: true,
			includePaths: ["./src/stylesheets"]
		},
		files: {
			"./dist/stylesheets/app.css": "./web/client/stylesheets/app.scss"
		}
	}
};
