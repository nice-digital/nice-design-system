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
	images: {
		unoptimized: true
	},
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	reactStrictMode: true,
	redirects: () => redirects,
	swcMinify: true,
	trailingSlash: true,
	transpilePackages: [...allNDSComponents, "@nice-digital/global-nav"]
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [
			remarkGfm,
			[remarkCodeHike, { theme, lineNumbers: true, showCopyButton: true }]
		],
		rehypePlugins: []
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	}
});

const redirects = [
	{
		source: "/components",
		destination: "/",
		permanent: true
	},
	{
		source: "/foundations",
		destination: "/",
		permanent: true
	}
];

export default withMDX(nextConfig);
