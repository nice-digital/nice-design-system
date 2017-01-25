module.exports = {
	options: {
		tagName: "v<%= version %>",
		tagMessage: "Version <%= version %>",
		commitMessage: "Release v<%= version %>",
		changelog: true,
		changelogText: "### v<%= version %> - <%= grunt.template.today('yyyy-mm-dd') %>\n",
		github: {
			apiRoot: "https://api.github.com",
			repo: "nhsevidence/NICE-experience",
			accessTokenVar: "GITHUB_ACCESS_TOKEN"
		}
	}
};
