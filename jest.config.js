module.exports = {
	collectCoverageFrom: [
		"packages/*/src/**/*.js"
	],
	coveragePathIgnorePatterns: [
		"stories\\.js"
	],
	testEnvironment: "node",
	testPathIgnorePatterns: [
		"<rootDir>/(?:.+?)/lib/",
		"<rootDir>/(?:.+?)/es/"
	],
	moduleNameMapper: {
		"^.+\\.(css|less|scss)$": "identity-obj-proxy"
	}
};
