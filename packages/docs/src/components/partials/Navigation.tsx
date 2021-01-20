import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { capitalise } from "../../utils";
import { navigationGenerator } from "./navigation-generator";

type NavigationType = {
	currentSlug: string;
	currentId: string;
	// hasRootLink?: boolean;
};

type ResponseType = {
	allMdx: {
		nodes: [
			{
				id: string;
				slug: string;
				frontmatter: {
					title: string;
					navigationLabel: string;
				};
			}
		];
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
					}
				}
			}
		}
	`);

	// const navigation = response.allMdx.nodes.filter(
	// 	(node: any) => node.frontmatter.section === props.section
	// );

	const allNavigation = response.allMdx.nodes;

	const { currentSlug, currentId } = props;

	const navigation = navigationGenerator(allNavigation, currentId, currentSlug);

	return (
		<StackedNav>
			{allNavigation.map(
				({ id, slug, frontmatter: { title, navigationLabel } }) => {
					return (
						<StackedNavLink
							isCurrent={id === currentId}
							key={id}
							destination={"/" + slug}
							elementType={Link}
						>
							{navigationLabel ? navigationLabel : title}
						</StackedNavLink>
					);
				}
			)}
		</StackedNav>
	);
}
