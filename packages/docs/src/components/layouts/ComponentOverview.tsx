import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, graphql } from "gatsby";
import { ComponentNavigation } from "../partials/ComponentNavigation";
import { OverviewGrid } from "../partials/OverviewGrid";
import Seo from "../../components/partials/Seo";
import Wrapper from "../../components/layouts/Wrapper";

export const query = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			id
			frontmatter {
				title
				lead
				overview
			}
			body
		}
	}
`;

type OverviewTypes = {
	location: {
		pathname: string;
	};
	data: {
		mdx: {
			frontmatter: {
				title: string;
				lead: string;
				overview: string;
			};
			id: string;
			body: string;
		};
	};
};

export default function ComponentsOverview(props: OverviewTypes) {
	const {
		location: { pathname }
	} = props;
	const {
		body,
		frontmatter: { title, lead, overview }
	} = props.data.mdx;
	return (
		<Wrapper className="pt--e">
			<Grid>
				<GridItem cols={12}>
					<PageHeader heading={title} lead={lead} />
				</GridItem>
				<GridItem cols={12}>
					<MDXRenderer>{body}</MDXRenderer>
				</GridItem>
			</Grid>
			<Grid gutter="loose">
				<GridItem cols={12} sm={3} md={2}>
					<ComponentNavigation section={overview} pathname={pathname} />
				</GridItem>
				<GridItem cols={12} sm={9} md={10}>
					<OverviewGrid section={overview} />
				</GridItem>
			</Grid>
		</Wrapper>
	);
}
