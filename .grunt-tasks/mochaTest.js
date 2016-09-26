module.exports = {
	test : {
		src: ["test/**/*.spec.js"],
		options: {
			require: ["babel-core/register", "./test/_setup.js"]
		}
	}
};
