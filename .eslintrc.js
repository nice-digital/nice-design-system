module.exports = {
	parser: "@typescript-eslint/parser",
	extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
	settings: {
		react: {
			version: "detect"
		}
	},
	plugins: ["@typescript-eslint/eslint-plugin"],
	env: {
		es6: true
	},
	rules: {
		"react/react-in-jsx-scope": "off"
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
