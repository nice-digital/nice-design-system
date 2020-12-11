import React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Seo from "../../components/Seo";
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
			<Seo title={frontmatter.title} description={frontmatter.description} />
			<PageHeader heading={frontmatter.title} lead={frontmatter.description} />
				<GridItem cols={2}>
					<ComponentNavigation currentId={id} section={fields.type} />
				</GridItem>
				<GridItem cols={8}>
					<MDXRenderer>{body}</MDXRenderer>
				</GridItem>
				<GridItem cols={2}>
					<p>In page nav</p>
				</GridItem>
			</Grid>
		</Wrapper>
	);
}
