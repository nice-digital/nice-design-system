// See https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode
const path = require('path');

module.exports = async ({ config, mode }) => {

	const scssRule = config.module.rules.find((rule) => rule.test.toString() == /\.(scss|sass)$/);

	// Assume the loaders are style loader, css loader and sass loader in that order
	const scssLoader = scssRule.use[3];

	scssLoader.options.data = "$nice-icons-base-path: '/';";

  return config;
};
