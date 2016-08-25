module.exports = {
	default: {
		options: {
			sourceMap: true,
			includePaths: ["./src/stylesheets"]
		},
		files: {
			"./dist/stylesheets/main.css": "./web/client/stylesheets/main.scss"
		}
	}
};
