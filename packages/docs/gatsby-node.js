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
		const slug =
			node.frontmatter.path || slugify(node.frontmatter.title).toLowerCase();
		const type = node.frontmatter.type;
		const path = node.frontmatter.path;
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
		createNodeField({ node, name: "path", value: path });
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
							path
						}
					}
				}
			}
		}
	`);
	response.data.allMdx.edges.forEach(edge => {
		const { slug, type, path } = edge.node.fields;
		createPage({
			component: template,
			path,
			context: {
				slug,
				type
			}
		});
	});
};
