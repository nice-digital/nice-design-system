import React from "react";
import { graphql, Link } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Seo from "../../components/partials/Seo";
import Wrapper from "./Wrapper";
import { Navigation } from "../partials/navigation/Navigation";
import { BreadcrumbWrapper } from "../partials/breadcrumbs/BreadcrumbWrapper";

type DetailLayoutType = {
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
	}
`;

export default function DetailLayout(props: DetailLayoutType) {
	const {
		body,
		slug,
		frontmatter: { title, description, inpagenav = false },
		id
	} = props.data.mdx;

	const crumbs = slug.split("/").filter(i => i);

	crumbs.forEach(item => {
		console.log(item);
	});

	return (
		<Wrapper>
			<Seo title={title} description={description} />
			<Grid gutter="loose">
				<GridItem cols={12}>
					<BreadcrumbWrapper currentSlug={slug} currentId={id} />
					<PageHeader heading={title} lead={description} />
				</GridItem>
				<GridItem cols={2}>
					<Navigation currentSlug={slug} currentId={id} />
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
