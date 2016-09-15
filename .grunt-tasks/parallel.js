module.exports = {
	options: {
		stream: true
	},
	default: {
		options: {
			grunt: true
		},
		tasks: ["sassdoc", "documentation", "modernizr", "sass:dev", "webpack:dev"]
	}
};
