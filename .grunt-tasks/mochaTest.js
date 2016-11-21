module.exports = {
	test: {
		src: ["src/**/*.test.js", "test/**/*.spec.js"],
		options: {
			require: ["babel-core/register", "mocha-clean", "./test/_setup.js"]
		}
	}
};
