import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { capitalise } from "../utils";

type ComponentNavigationType = {
	section: string;
	currentId: string;
};

type ResponseType = {
	allMdx: {
		edges: [
			{
				node: {
					id: string;
					fields: {
						type: string;
					};
					frontmatter: {
						title: string;
					};
					slug: string;
				};
			}
		];
	};
};

export function ComponentNavigation(
	props: ComponentNavigationType
): React.ReactNode {
	const response: ResponseType = useStaticQuery(graphql`
		{
			allMdx {
				edges {
					node {
						id
						fields {
							type
						}
						frontmatter {
							title
						}
						slug
					}
				}
			}
		}
	`);

	const navigation = response.allMdx.edges.filter(
		(edge: any) => edge.node.fields.type === props.section
	);

	const { section, currentId } = props;
	return (
		<StackedNav label={capitalise(section)}>
			{navigation.map(({ node }) => {
				return (
					<StackedNavLink
						isCurrent={node.id === currentId}
						key={node.id}
						destination={`/${node.slug}`}
						elementType={Link}
					>
						{node.frontmatter.title}
					</StackedNavLink>
				);
			})}
		</StackedNav>
	);
}
