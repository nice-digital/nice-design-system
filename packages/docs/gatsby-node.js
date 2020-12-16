const path = require("path");
const slugify = require("slugify");

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === "Mdx") {
		const slug =
			node.frontmatter.path || slugify(node.frontmatter.title).toLowerCase();
		createNodeField({
			node,
			name: "slug",
			value: slug
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
						}
						frontmatter {
							template
							section
							path
						}
					}
				}
			}
		}
	`);

	response.data.allMdx.edges.forEach(
		({
			node: {
				fields: { slug },
				frontmatter: { template, section, path }
			}
		}) => {
			createPage({
				component: templates[template || "default"],
				path,
				context: {
					slug,
					section
				}
			});
		}
	);
};

const templates = {
	default: path.resolve("./src/components/layouts/Default.tsx"),
	overview: path.resolve("./src/components/layouts/Overview.tsx"),
	component: path.resolve("./src/components/layouts/ComponentDetail.tsx"),
	generalSidenav: path.resolve("./src/components/layouts/GeneralSidenav.tsx")
};
