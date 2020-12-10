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
						slug: string;
						path: string | undefined;
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
			{navigation.map(
				({
					node: {
						slug,
						id,
						frontmatter: { title }
					}
				}) => {
					return (
						<StackedNavLink
							isCurrent={id === currentId}
							key={id}
							destination={"/" + slug}
							elementType={Link}
						>
							{title}
						</StackedNavLink>
					);
				}
			)}
		</StackedNav>
	);
}
