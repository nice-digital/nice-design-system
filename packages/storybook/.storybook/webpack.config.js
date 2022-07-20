module.exports = function ({ config }) {
	// for story source plugin https://github.com/storybookjs/storybook/tree/master/addons/storysource#getting-started
	config.module.rules.push({
		test: /\.stories\.jsx?$/,
		loaders: [require.resolve("@storybook/source-loader")],
		enforce: "pre"
	});

	return config;
};
