module.exports = {
	collectCoverageFrom: ["packages/*/src/**/*.js", "components/*/src/**/*.js"],
	coveragePathIgnorePatterns: ["stories\\.js"],
	moduleNameMapper: {
		"^.+\\.(css|less|scss)$": "identity-obj-proxy",
		"nds-input": "<rootDir>/components/nds-input/src/Input.js",
		"nds-maintain-ratio":
			"<rootDir>/components/nds-maintain-ratio/src/MaintainRatio.js",
		"nds-button": "<rootDir>/components/nds-button/src/Button.js",
		"nds-tag": "<rootDir>/components/nds-tag/src/Tag.js",
		"nds-core": "<rootDir>/components/nds-core/src/core.js"
	},
	setupFilesAfterEnv: ["<rootDir>/scripts/jest/setup.js"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	testEnvironment: "jsdom",
	testPathIgnorePatterns: [
		"<rootDir>/(?:.+?)/lib/",
		"<rootDir>/(?:.+?)/es/",
		".cache"
	],
	transformIgnorePatterns: ["<rootDir>.*(node_modules)(?!.*nds-*.*).*$"]
};
