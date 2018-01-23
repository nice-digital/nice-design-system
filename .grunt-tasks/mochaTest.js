module.exports = {
	test: {
		src: ["src/**/*.test.js", "test/**/*.test.js"],
		options: {
			require: ["babel-core/register", "mocha-clean", "./test/_setup.js"]
		}
	},

	teamcity: {
		src: ["src/**/*.test.js", "test/**/*.test.js"],
		options: {
			reporter: "mocha-teamcity-reporter",
			require: ["mocha-teamcity-reporter", "babel-core/register", "mocha-clean", "./test/_setup.js" ]
		}
	}
};
