/** @type {import('next').NextConfig} */

const glob = require("glob");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true
};

// All NDS components need to be transpiled
// If we don't do this, Next will kick off about the global CSS
const allNDSComponents = glob.sync("@nice-digital/*", {
	cwd: "../node_modules"
});

const withTM = require("next-transpile-modules")(allNDSComponents);
module.exports = withTM(nextConfig);
