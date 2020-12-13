const path = require("path");
const slugify = require("slugify");

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === "Mdx") {
		const slug =
			node.frontmatter.path || slugify(node.frontmatter.title).toLowerCase();
		const section = node.frontmatter.section;
		const path = node.frontmatter.path;
		createNodeField({
			node,
			name: "slug",
			value: slug
		});
		createNodeField({
			node,
			name: "section",
			value: section
		});
		createNodeField({
			node,
			name: "path",
			value: path
		});
	}
};

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const response = await graphql(`
		query {
			allMdx {
				edges {
					node {
						fields {
							slug
							section
							path
						}
						frontmatter {
							template
						}
					}
				}
			}
		}
	`);

	response.data.allMdx.edges.forEach(edge => {
		const { slug, section, path } = edge.node.fields;
		const { template } = edge.node.frontmatter;
		createPage({
			component: templates[template || "default"],
			path,
			context: {
				slug,
				section
			}
		});
	});
};

const templates = {
	default: path.resolve("./src/components/layouts/Default.tsx"),
	overview: path.resolve("./src/components/layouts/ComponentOverview.tsx"),
	component: path.resolve("./src/components/layouts/ComponentDetail.tsx")
};
