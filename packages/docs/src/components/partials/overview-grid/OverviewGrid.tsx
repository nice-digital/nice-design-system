import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import orderBy from "lodash/orderBy";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { isDirectChild, slugMatches } from "../../../utils";

type OverviewGridType = {
	currentSlug: string;
};

export type ResponseObjectType = {
	id: string;
	slug: string;
	frontmatter: {
		title: string;
		navigationLabel: string;
		order: number;
		description: string;
	};
};

type ResponseType = {
	allMdx: {
		nodes: ResponseObjectType[];
	};
};

export function OverviewGrid(props: OverviewGridType): React.ReactElement {
	const response: ResponseType = useStaticQuery(graphql`
		{
			allMdx {
				nodes {
					id
					slug
					frontmatter {
						title
						description
					}
				}
			}
		}
	`);

	let results: ResponseObjectType[] = [];

	const allItems = response.allMdx.nodes;

	const { currentSlug } = props;

	const arr = currentSlug.split("/").filter(i => i);

	results = allItems
		.filter(slugMatches, currentSlug)
		.filter(isDirectChild, arr.length);

	results = orderBy(results, ["frontmatter.order", "frontmatter.title"]);

	return (
		<Grid gutter="loose" elementType="ul" className="list--unstyled width-100">
			{results.map(
				({ id: childId, slug, frontmatter: { title, description } }) => {
					return (
						<GridItem key={childId} cols={6} sm={4} md={3} elementType="li">
							<h2 className="h4">
								<Link to={`/${slug}`}>{title}</Link>
							</h2>
							<p>{description}</p>
						</GridItem>
					);
				}
			)}
		</Grid>
	);
}
