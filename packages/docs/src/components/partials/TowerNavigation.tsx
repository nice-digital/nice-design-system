import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { capitalise } from "../../utils";

type TowerNavigationType = {
	section: string;
	currentId?: string | undefined;
	pathname?: string;
	hasRootLink?: boolean;
};

type ResponseType = {
	allMdx: {
		edges: [
			{
				node: {
					id: string;
					fields: {
						slug: string;
					};
					frontmatter: {
						title: string;
						section: string;
					};
				};
			}
		];
	};
};

export function TowerNavigation(
	props: TowerNavigationType
): React.ReactElement {
	const response: ResponseType = useStaticQuery(graphql`
		{
			allMdx(sort: { fields: frontmatter___title }) {
				edges {
					node {
						id
						frontmatter {
							title
							section
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	const navigation = response.allMdx.edges.filter(
		(edge: any) => edge.node.frontmatter.section === props.section
	);

	const { section, currentId, pathname, hasRootLink } = props;

	const labelProps = {
		label: capitalise(section),
		link: hasRootLink
			? {
					elementType: Link,
					destination: `/${section}`,
					isCurrent: pathname === `/${section}`
			  }
			: undefined
	};

	return (
		<StackedNav {...labelProps}>
			{navigation.map(
				({
					node: {
						id,
						frontmatter: { title },
						fields: { slug }
					}
				}) => {
					return (
						<StackedNavLink
							isCurrent={id === currentId}
							key={id}
							destination={slug}
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
