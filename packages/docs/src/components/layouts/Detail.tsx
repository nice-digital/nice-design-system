import React from "react";
import { graphql, Link } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Seo from "../../components/partials/Seo";
import Wrapper from "./Wrapper";

type ComponentDetailLayoutType = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
				inpagenav: boolean;
			};
			id: string;
			body: string;
			fields: {
				slug: string;
			};
		};
		allMdx: {
			nodes: [
				{
					id: string;
					fields: {
						slug: string;
					};
					frontmatter: {
						title: string;
						description: string;
						navTitle: string;
					};
				}
			];
		};
	};
};

export const query = graphql`
	query($slug: String!, $sectionRegex: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			id
			frontmatter {
				title
				description
				inpagenav
			}
			fields {
				slug
			}
			body
		}
		# Query to generate the navigation from
		allMdx(
			sort: { fields: [frontmatter___sort, frontmatter___title] }
			filter: { slug: { regex: $sectionRegex } }
		) {
			nodes {
				id
				fields {
					slug
				}
				frontmatter {
					title
					description
					navTitle
				}
			}
		}
	}
`;

export default function ComponentDetailLayout(
	props: ComponentDetailLayoutType
) {
	const {
		body,
		frontmatter: { title, description, inpagenav = false },
		id,
		fields: { slug }
	} = props.data.mdx;

	const { nodes } = props.data.allMdx;

	return (
		<Wrapper className="pt--e">
			<pre>Detail.tsx</pre>
			<Seo title={title} description={description} />
			<Grid gutter="loose">
				<GridItem cols={12}>
					<PageHeader heading={title} lead={description} />
				</GridItem>
				<GridItem cols={2}>
					<StackedNav>
						{nodes.map(
							({
								id: navId,
								fields: { slug },
								frontmatter: { title, navTitle }
							}) => {
								return (
									<StackedNavLink
										isCurrent={navId === id}
										key={id + slug}
										destination={slug}
										elementType={Link}
									>
										{navTitle ? navTitle : title}
									</StackedNavLink>
								);
							}
						)}
					</StackedNav>
				</GridItem>
				<GridItem cols={8}>
					<MDXRenderer>{body}</MDXRenderer>
				</GridItem>
				{inpagenav && (
					<GridItem cols={2}>
						<p>In page nav goes here</p>
					</GridItem>
				)}
			</Grid>
		</Wrapper>
	);
}
