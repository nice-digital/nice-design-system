import React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Seo from "../../components/partials/seo/Seo";
import Wrapper from "./Wrapper";
import { Navigation } from "../partials/navigation/Navigation";
import { BreadcrumbWrapper } from "../partials/breadcrumbs/BreadcrumbWrapper";
import { InPageNav } from "../partials/inpagenav/InPageNav";

type DetailLayoutType = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
				inpagenav: boolean;
			};
			tableOfContents: {
				items: TableOfContentsItemType[];
			};
			slug: string;
			id: string;
			body: string;
		};
	};
};

type TableOfContentsItemType = {
	title: string;
	url: string;
	items: TableOfContentsItemType[] | undefined;
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
			tableOfContents
			body
		}
	}
`;

export default function DetailLayout(
	props: DetailLayoutType
): React.ReactElement {
	const {
		body,
		slug,
		frontmatter: { title, description, inpagenav = false },
		id
	} = props.data.mdx;

	return (
		<Wrapper>
			<Seo title={title} description={description} />
			<Grid gutter="loose">
				<GridItem cols={12}>
					<BreadcrumbWrapper currentSlug={slug} />
					<PageHeader heading={title} lead={description} />
				</GridItem>
				<GridItem cols={12} sm={2}>
					<Navigation currentSlug={slug} currentId={id} />
				</GridItem>
				<GridItem cols={12} sm={inpagenav ? 8 : 10}>
					<MDXRenderer>{body}</MDXRenderer>
				</GridItem>
				{inpagenav ? (
					<GridItem cols={2}>{/*placeholder for in page nav*/}</GridItem>
				) : (
					<></>
				)}
			</Grid>
		</Wrapper>
	);
}
