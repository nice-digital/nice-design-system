/** @type {import('next').NextConfig} */

import glob from "glob";
import theme from "shiki/themes/nord.json" assert { type: "json" };
import { remarkCodeHike } from "@code-hike/mdx";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

// All NDS components need to be transpiled
// If we don't do this, Next will kick off about the global CSS
const allNDSComponents = glob.sync("@nice-digital/*", {
	cwd: "../node_modules"
});

const nextConfig = {
	transpilePackages: [...allNDSComponents, "@nice-digital/global-nav"],
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	images: {
		unoptimized: true
	},
	trailingSlash: true
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [remarkGfm, [remarkCodeHike, { theme, lineNumbers: true }]],
		rehypePlugins: []
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	}
});

export default withMDX(nextConfig);
