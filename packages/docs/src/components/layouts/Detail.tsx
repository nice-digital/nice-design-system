import React from "react";
import { graphql, Link } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Seo from "../../components/partials/Seo";
import Wrapper from "./Wrapper";
import { Navigation } from "../partials/Navigation";

type ComponentDetailLayoutType = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
				inpagenav: boolean;
			};
			slug: string;
			id: string;
			body: string;
		};
		allMdx: {
			nodes: [
				{
					slug: string;
					id: string;
					frontmatter: {
						title: string;
						description: string;
						navigationLabel: string;
						sort: number;
					};
				}
			];
		};
	};
};

export const query = graphql`
	query($slug: String!) {
		mdx(slug: { eq: $slug }) {
			slug
			id
			frontmatter {
				title
				description
				inpagenav
			}
			body
		}
		# Query to generate the navigation from
		allMdx(sort: { fields: [frontmatter___sort, frontmatter___title] }) {
			nodes {
				id
				slug
				frontmatter {
					title
					description
					navigationLabel
					sort
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
		slug,
		frontmatter: { title, description, inpagenav = false },
		id
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
					<Navigation currentSlug={slug} currentId={id} />
					{/*<StackedNav>*/}
					{/*	{nodes.map(*/}
					{/*		({*/}
					{/*			id: navId,*/}
					{/*			slug,*/}
					{/*			frontmatter: { title, navigationLabel }*/}
					{/*		}) => {*/}
					{/*			return (*/}
					{/*				<StackedNavLink*/}
					{/*					isCurrent={navId === id}*/}
					{/*					key={id + slug}*/}
					{/*					destination={slug}*/}
					{/*					elementType={Link}*/}
					{/*				>*/}
					{/*					{navigationLabel ? navigationLabel : title}*/}
					{/*				</StackedNavLink>*/}
					{/*			);*/}
					{/*		}*/}
					{/*	)}*/}
					{/*</StackedNav>*/}
				</GridItem>
				<GridItem cols={8}>
					<MDXRenderer>{body}</MDXRenderer>
				</GridItem>
				{inpagenav ? (
					<GridItem cols={2}>
						<p>In page nav goes here</p>
					</GridItem>
				) : (
					<></>
				)}
			</Grid>
		</Wrapper>
	);
}
