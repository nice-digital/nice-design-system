/** @type {import('next').NextConfig} */

const glob = require("glob");
const { default: next } = require("next");
const {
	getModuleBuildInfo
} = require("next/dist/build/webpack/loaders/get-module-build-info");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"]
};

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: []
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	}
});

// All NDS components need to be transpiled
// If we don't do this, Next will kick off about the global CSS
const allNDSComponents = glob.sync("@nice-digital/*", {
	cwd: "../node_modules"
});

const withTM = require("next-transpile-modules")(allNDSComponents);

module.exports = withTM(withMDX(nextConfig));
