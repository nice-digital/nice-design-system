module.exports = {
	options: {
		src: {
			tagName: "v%s",
			tagAnnotation: "Version %s",
			commitMessage: "Release v%s",
		},
		npm: {
			publish: true
		},
		github: {
			release: true
		},
		"changelogCommand": "git log --format=format:\"* %s | %ad | %h\" --date=short [REV_RANGE]",
		buildCommand: "npm run dist",
		"non-interactive": true,
		//"dry-run": true,
		verbose: true
	}
};
