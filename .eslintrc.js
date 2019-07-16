module.exports = {
	parser: "babel-eslint",
	extends: ["@nice-digital/eslint-config/es6", "plugin:react/recommended"],
	settings: {
		react: {
			version: "detect"
		}
	},
	env: {
		es6: true
	},
	overrides: [
		{
			files: ["**.test.js"],
			env: {
				jest: true,
				browser: true
			}
		}
	]
};
