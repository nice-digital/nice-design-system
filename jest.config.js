module.exports = {
	collectCoverageFrom: ["packages/*/src/**/*.js"],
	coveragePathIgnorePatterns: ["stories\\.js"],
	moduleNameMapper: {
		"^.+\\.(css|less|scss)$": "identity-obj-proxy"
	},
	setupFilesAfterEnv: ["<rootDir>/scripts/jest/setup.js"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["<rootDir>/(?:.+?)/lib/", "<rootDir>/(?:.+?)/es/"]
};
