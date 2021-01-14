module.exports = {
	flags: {
		PRESERVE_WEBPACK_CACHE: true
	},
	siteMetadata: {
		title: "NICE Design System",
		description:
			"Your source for quickly creating consistent on-brand NICE digital services",
		author: "@nice-digital"
	},
	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: `${__dirname}/src/pages`,
				ignore: ["**/.*"]
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "content",
				path: `${__dirname}/src/content`
			}
		},
		"gatsby-plugin-mdx",
		"gatsby-transformer-remark",
		"gatsby-plugin-typescript",
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#663399",
				theme_color: "#663399",
				display: "minimal-ui",
				icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
