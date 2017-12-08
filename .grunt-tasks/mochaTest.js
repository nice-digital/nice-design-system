module.exports = {
	test: {
		src: ["src/**/*.test.js", "test/**/*.test.js"],
		options: {
			require: ["babel-core/register", "mocha-clean", "./test/_setup.js"]
		}
	}
};
