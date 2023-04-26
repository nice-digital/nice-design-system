import type { Config } from "jest";

const config: Config = {
	collectCoverageFrom: ["<rootDir>/components/**/src/**/*.tsx"],
	moduleFileExtensions: ["tsx", "ts", "js"],
	moduleNameMapper: {
		"^.+\\.(css|less|scss)$": "identity-obj-proxy"
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "jsdom",
	testMatch: ["<rootDir>/components/**/src/**/*.test.tsx"],
	testPathIgnorePatterns: [
		"<rootDir>/(?:.+?)/lib/",
		"<rootDir>/(?:.+?)/es/",
		"\\.cache",
		"\\.next"
	],
	transform: {
		"^.+\\.(ts|tsx|js)?$": "ts-jest"
	},
	transformIgnorePatterns: ["<rootDir>.*(node_modules)(?!.*nds-*.*).*$"]
};

export default config;
