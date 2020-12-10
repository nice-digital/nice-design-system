import React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Wrapper from "./Wrapper";
import { ComponentNavigation } from "../ComponentNavigation";

type ComponentDetailLayoutType = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
			};
			id: string;
			fields: {
				type: string;
			};
			body: string;
		};
	};
};

export const query = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			id
			frontmatter {
				title
				description
			}
			fields {
				type
			}
			body
		}
	}
`;

export default function ComponentDetailLayout(
	props: ComponentDetailLayoutType
) {
	const { body, fields, frontmatter, id } = props.data.mdx;
	return (
		<Wrapper>
			<PageHeader heading={frontmatter.title} lead={frontmatter.description} />
			<Grid gutter="loose">
				<GridItem cols={3}>
					<ComponentNavigation currentId={id} section={fields.type} />
				</GridItem>
				<GridItem cols={9}>
					<MDXRenderer>{body}</MDXRenderer>
				</GridItem>
			</Grid>
		</Wrapper>
	);
}
