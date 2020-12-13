import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import { Grid, GridItem } from "@nice-digital/nds-grid";

type ComponentNavigationType = {
	section: string;
	currentId?: string | undefined;
	pathname?: string;
};

type ResponseType = {
	allMdx: {
		edges: [
			{
				node: {
					id: string;
					fields: {
						section: string;
					};
					frontmatter: {
						title: string;
						path: string;
						description: string;
					};
				};
			}
		];
	};
};

export function OverviewGrid(
	props: ComponentNavigationType
): React.ReactElement {
	const response: ResponseType = useStaticQuery(graphql`
		{
			allMdx {
				edges {
					node {
						id
						fields {
							section
						}
						frontmatter {
							title
							description
							path
						}
					}
				}
			}
		}
	`);

	const navigation = response.allMdx.edges.filter(
		(edge: any) => edge.node.fields.section === props.section
	);

	// const { section, currentId, pathname } = props;
	// const { id } =

	return (
		<Grid gutter="loose" elementType="ul" className="list--unstyled width-100">
			{navigation.map(edge => (
				<GridItem key={edge.node.id} cols={6} sm={4} md={3} elementType="li">
					<h2 className="h4">
						<Link to={edge.node.frontmatter.path}>
							{edge.node.frontmatter.title}
						</Link>
					</h2>
					<p>{edge.node.frontmatter.description}</p>
				</GridItem>
			))}
		</Grid>
	);
}
