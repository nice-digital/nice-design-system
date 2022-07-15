const path = require("path");

console.log(
	"##################################################################"
);
console.log(path.resolve(__dirname, "../../components/nds-core/node_modules/"));

module.exports = {
	siteMetadata: {
		title: "NICE Design System",
		homeLabel: "Design System",
		description: "Create consistent and on-brand digital services",
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
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: "gatsby-remark-autolink-headers",
						options: {
							offsetY: "100",
							className: "permalink-icon"
						}
					}
				]
			}
		},
		"gatsby-transformer-remark",
		"gatsby-plugin-typescript",
		{
			resolve: "gatsby-plugin-sass",
			options: {
				implementation: require("sass"),
				sassOptions: {
					includePaths: [
						"node_modules",
						// Allows the main NDS package to load nds-core's sass-mq dependency
						// when running locally in dev mode, because of the symlinks from bootstrapping
						path.resolve(__dirname, "../../components/nds-core/node_modules/")
					]
				}
			}
		},
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
