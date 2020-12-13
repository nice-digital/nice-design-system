import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { capitalise } from "../../utils";

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
					};
				};
			}
		];
	};
};

export function ComponentNavigation(
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

	const { section, currentId, pathname } = props;

	return (
		<StackedNav
			label={capitalise(section)}
			link={{
				elementType: Link,
				destination: `/${section}`,
				isCurrent: pathname === `/${section}`
			}}
		>
			{navigation.map(
				({
					node: {
						id,
						frontmatter: { title, path }
					}
				}) => {
					return (
						<StackedNavLink
							isCurrent={id === currentId}
							key={id}
							destination={path}
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
