const path = require("path");

module.exports = {
	stories: ["../stories/**/*.stories.(js|mdx)"],
	addons: [
		{
			name: "@storybook/preset-scss",
			options: {
				sassLoaderOptions: {
					sassOptions: {
						includePaths: [
							"node_modules",
							// Allows the main NDS package to load nds-core's sass-mq dependency
							// when running locally in dev mode, because of the symlinks from bootstrapping
							path.resolve(
								__dirname,
								"../../../components/nds-core/node_modules/"
							)
						]
					}
				}
			}
		},
		"@storybook/addon-actions",
		"@storybook/addon-links",
		"@storybook/addon-knobs",
		"@storybook/addon-viewport",
		"@storybook/addon-storysource",
		"@storybook/addon-a11y",
		"@whitespace/storybook-addon-html",
		"@storybook/addon-essentials",
		"@storybook/addon-docs"
	]
};
