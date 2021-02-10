import React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { BreadcrumbWrapper } from "../partials/breadcrumbs/BreadcrumbWrapper";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Wrapper from "./Wrapper";

type DefaultType = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
				inpagenav: boolean;
			};
			slug: string;
			body: string;
		};
	};
};

export const query = graphql`
	query($slug: String!) {
		mdx(slug: { eq: $slug }) {
			slug
			frontmatter {
				title
				description
				inpagenav
			}
			body
		}
	}
`;

export default function Default(props: DefaultType): React.ReactElement {
	const {
		body,
		frontmatter: { title, description, inpagenav },
		slug
	} = props.data.mdx;
	return (
		<Wrapper>
			<Grid gutter="loose">
				<GridItem cols={12}>
					<BreadcrumbWrapper currentSlug={slug} />
					<PageHeader heading={title} lead={description} />
				</GridItem>
				<GridItem cols={12} sm={inpagenav ? 8 : 10}>
					<MDXRenderer>{body}</MDXRenderer>
				</GridItem>
			</Grid>
		</Wrapper>
	);
}
