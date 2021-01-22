import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { navigationGenerator } from "./navigation-generator";

type NavigationType = {
	currentSlug: string;
	currentId: string;
};

export type ResponseObjectType = {
	id: string;
	slug: string;
	frontmatter: {
		title: string;
		navigationLabel: string;
		order: number;
	};
};

type ResponseType = {
	allMdx: {
		nodes: ResponseObjectType[];
	};
};

export function Navigation(props: NavigationType): React.ReactElement {
	const response: ResponseType = useStaticQuery(graphql`
		{
			allMdx {
				nodes {
					id
					slug
					frontmatter {
						navigationLabel
						title
						order
					}
				}
			}
		}
	`);

	const allNavigation = response.allMdx.nodes;

	const { currentSlug, currentId } = props;

	const navigation = navigationGenerator(allNavigation, currentId, currentSlug);

	return (
		<StackedNav>
			{navigation.map(({ label, destination, isCurrent }) => {
				return (
					<StackedNavLink
						isCurrent={!!isCurrent}
						key={destination}
						destination={`/${destination}`}
						elementType={Link}
					>
						{label}
					</StackedNavLink>
				);
			})}
		</StackedNav>
	);
}
