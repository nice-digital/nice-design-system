const path = require("path");
const slugify = require("slugify");

const { createFilePath } = require("gatsby-source-filesystem");

module.exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === "Mdx") {
		const value = createFilePath({ node, getNode });
		createNodeField({
			node,
			name: "slug",
			value
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
				frontmatter: { template }
			}
		}) => {
			const urlSegments = slug.split("/").filter(item => item);

			const sectionRegex = () => {
				if (urlSegments.length === 3) {
					return `/${urlSegments[0]}/${urlSegments[1]}/`;
				}
				return `/${urlSegments[0]}/`;
			};

			createPage({
				component: templates[template || "default"],
				path: slug,
				context: {
					slug,
					sectionRegex: `${slug}(?:[^\\/]+\\/)?$`
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
