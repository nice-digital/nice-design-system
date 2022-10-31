/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true
};

// All NDS components need to be manually listed here to be transpiled
// If we don't add them here, Next will kick off about the global CSS
const allNDSComponents = [
	"@nice-digital/nds-action-banner",
	"@nice-digital/nds-button"
];

const withTM = require("next-transpile-modules")(allNDSComponents);

module.exports = withTM(nextConfig);
