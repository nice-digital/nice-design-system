module.exports = {
	test: {
		src: ["test/**/*.spec.js"],
		options: {
			require: ["babel-core/register", "mocha-clean", "./test/_setup.js"]
		}
	}
};
