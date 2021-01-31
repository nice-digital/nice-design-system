module.exports = {
	parser: "@typescript-eslint/parser",
	extends: ["@nice-digital/eslint-config/es6", "plugin:react/recommended"],
	settings: {
		react: {
			version: "detect"
		}
	},
	plugins: ["@typescript-eslint/eslint-plugin"],
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
