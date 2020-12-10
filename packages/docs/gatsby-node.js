const path = require("path");
const slugify = require("slugify");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === "Mdx") {
		const slug = slugify(node.frontmatter.title).toLowerCase();
		const arr = path.dirname(node.fileAbsolutePath).split("/");
		const type = arr.splice(arr.length - 2, 1)[0] || null;
		createNodeField({
			node,
			name: "slug",
			value: slug
		});
		createNodeField({
			node,
			name: "type",
			value: type
		});
	}
};

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const template = path.resolve("./src/components/layouts/ComponentDetail.tsx");
	const response = await graphql(`
		query {
			allMdx {
				edges {
					node {
						fields {
							slug
							type
						}
					}
				}
			}
		}
	`);
	response.data.allMdx.edges.forEach(edge => {
		const { slug, type } = edge.node.fields;
		createPage({
			component: template,
			path: `/${type}/${slug}`,
			context: {
				slug,
				type
			}
		});
	});
};
