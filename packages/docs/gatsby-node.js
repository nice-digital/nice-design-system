const path = require("path");

// const { createFilePath } = require("gatsby-source-filesystem");

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const response = await graphql(`
		query {
			allMdx {
				edges {
					node {
						slug
						frontmatter {
							template
						}
					}
				}
			}
		}
	`);

	response.data.allMdx.edges.forEach(
		({
			node: {
				slug,
				frontmatter: { template }
			}
		}) => {
			createPage({
				component: templates[template || "default"],
				path: slug,
				context: {
					slug
				}
			});
		}
	);
};

const templates = {
	default: path.resolve("./src/components/layouts/Default.tsx"),
	overview: path.resolve("./src/components/layouts/Overview.tsx"),
	detail: path.resolve("./src/components/layouts/Detail.tsx")
};
