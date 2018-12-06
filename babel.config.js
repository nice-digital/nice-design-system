module.exports = function (api) {

	const babelEnv = api.env();
	api.cache.using(() => process.env.NODE_ENV);

	const useESModules = (babelEnv === "es");

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
				development: babelEnv === "development",
			}
		],
		"@babel/preset-flow"
	];

	const plugins = [
		["@babel/transform-runtime", { useESModules: useESModules }]
	];

	const ignore = [
		"**/*.stories.js"
	];

	const env = {
		test: {
			plugins: ["@babel/plugin-transform-modules-commonjs"]
		}
	};

	return {
		presets,
		plugins,
		ignore,
		env
	};
};
