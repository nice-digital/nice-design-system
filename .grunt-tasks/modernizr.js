module.exports = {
	default: {
		// We prefer to use a manual list of tests rather than crawling
		// so it can be used by other applications if necessary
		crawl: false,
		dest: "./dist/javascripts/modernizr.nice.min.js",
		options: [
			"setClasses"
		],
		tests: [
			// Add custom tests here as they're needed
			"touchevents"
		],
		uglify: true
	}
};
