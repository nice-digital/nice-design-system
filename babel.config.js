module.exports = function (api) {

	const env = api.env();
	api.cache.using(() => process.env.NODE_ENV);

	const useESModules = (env === "es");

	const presets = [
		[
			"@babel/preset-env",
			{
				loose: true,
				modules: useESModules ? false : "commonjs"
			}
		],
		[
			"@babel/preset-react",
			{
				development: env === "development",
			}
		],
		"@babel/preset-flow"
	];

	const plugins = [
		["@babel/transform-runtime", { useESModules: useESModules }]
	];

	const ignore = [".test.js", "/__tests__/", ".stories.js"];

	return {
		presets,
		plugins,
		ignore
	};
};
