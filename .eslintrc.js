module.exports = {
	parser: "babel-eslint",
	extends: [
		"@nice-digital/eslint-config/es6",
		"plugin:react/recommended",
		"plugin:flowtype/recommended"
	],
	settings: {
		react: {
			version: "detect"
		}
	},
	plugins: ["flowtype"],
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
