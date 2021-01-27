import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import Seo from "../../components/partials/Seo";
import Wrapper from "../../components/layouts/Wrapper";
import { Navigation } from "../partials/navigation/Navigation";
import { OverviewGrid } from "../partials/overview-grid/OverviewGrid";
import { BreadcrumbWrapper } from "../partials/breadcrumbs/BreadcrumbWrapper";

type OverviewTypes = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
			};
			id: string;
			body: string;
			slug: string;
		};
		allMdx: {
			nodes: [
				{
					id: string;
					slug: string;
					frontmatter: {
						title: string;
						description: string;
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
			}
			body
		}
		allMdx(sort: { fields: [frontmatter___order, frontmatter___title] }) {
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
`;

export default function Overview(props: OverviewTypes) {
	const {
		id,
		body,
		slug,
		frontmatter: { title, description }
	} = props.data.mdx;

	const { nodes } = props.data.allMdx;

	return (
		<Wrapper>
			<Grid>
				<GridItem cols={12}>
					<BreadcrumbWrapper currentSlug={slug} />
					<PageHeader heading={title} lead={description} />
				</GridItem>
			</Grid>
			<Grid gutter="loose">
				<GridItem cols={12} sm={3} md={2}>
					<Navigation currentSlug={slug} currentId={id} />
				</GridItem>
				<GridItem cols={12} sm={9} md={10}>
					{body && <MDXRenderer>{body}</MDXRenderer>}
					<OverviewGrid currentSlug={slug} />
				</GridItem>
			</Grid>
		</Wrapper>
	);
}
