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
					frontmatter: {
						title: string;
						path: string;
						description: string;
						section: string;
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
			allMdx(sort: { fields: frontmatter___title }) {
				edges {
					node {
						id
						frontmatter {
							title
							description
							path
							section
						}
					}
				}
			}
		}
	`);

	const navigation = response.allMdx.edges.filter(
		(edge: any) => edge.node.frontmatter.section === props.section
	);

	return (
		<Grid gutter="loose" elementType="ul" className="list--unstyled width-100">
			{navigation.map(
				({
					node: {
						id,
						frontmatter: { path, title, description }
					}
				}) => (
					<GridItem key={id} cols={6} sm={4} md={3} elementType="li">
						<h2 className="h4">
							<Link to={path}>{title}</Link>
						</h2>
						<p>{description}</p>
					</GridItem>
				)
			)}
		</Grid>
	);
}
