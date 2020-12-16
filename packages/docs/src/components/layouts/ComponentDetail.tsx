import React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Seo from "../../components/partials/Seo";
import Wrapper from "./Wrapper";
import { TowerNavigation } from "../partials/TowerNavigation";

type ComponentDetailLayoutType = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
				section: string;
			};
			id: string;
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
				section
			}
			body
		}
	}
`;

export default function ComponentDetailLayout(
	props: ComponentDetailLayoutType
) {
	const {
		body,
		frontmatter: { title, description, section },
		id
	} = props.data.mdx;
	return (
		<Wrapper className="pt--e">
			<Seo title={title} description={description} />
			<Grid gutter="loose">
				<GridItem cols={12}>
					<PageHeader heading={title} lead={description} />
				</GridItem>
				<GridItem cols={2}>
					<TowerNavigation
						currentId={id}
						section={section}
						hasRootLink={true}
					/>
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
