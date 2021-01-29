const path = require("path");

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions;
	const typeDefs = `
    type AuthorJson implements Node {
      joinedAt: Date
    }
  `;
	createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const response = await graphql(`
		query {
			allMdx {
				edges {
					node {
						slug
						frontmatter {
							title
							template
							description
							order
						}
					}
				}
			}
		}
	`);

	response.data.allMdx.edges.forEach(({ node: { slug, frontmatter } }) => {
		createPage({
			component: templates[frontmatter.template || "default"],
			path: slug,
			context: {
				slug
			}
		});
	});
};

const templates = {
	default: path.resolve("./src/components/layouts/Default.tsx"),
	overview: path.resolve("./src/components/layouts/Overview.tsx"),
	detail: path.resolve("./src/components/layouts/Detail.tsx")
};
