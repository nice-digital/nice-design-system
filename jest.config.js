module.exports = {
	collectCoverageFrom: ["components/*/src/**/*.tsx"],
	moduleFileExtensions: ["tsx", "js"],
	moduleNameMapper: {
		"^.+\\.(css|less|scss)$": "identity-obj-proxy",
		"nds-input": "<rootDir>/components/nds-input/src/Input.js",
		"nds-maintain-ratio":
			"<rootDir>/components/nds-maintain-ratio/src/MaintainRatio.js",
		"nds-button": "<rootDir>/components/nds-button/src/Button.js",
		"nds-tag": "<rootDir>/components/nds-tag/src/Tag.js",
		"nds-core": "<rootDir>/components/nds-core/src/core.js"
	},
	testEnvironment: "jsdom",
	testPathIgnorePatterns: [
		"<rootDir>/(?:.+?)/lib/",
		"<rootDir>/(?:.+?)/es/",
		".cache",
		".next"
	],
	transform: {
		"^.+\\.(ts|tsx|js)?$": "ts-jest"
	},
	transformIgnorePatterns: ["<rootDir>.*(node_modules)(?!.*nds-*.*).*$"]
};
