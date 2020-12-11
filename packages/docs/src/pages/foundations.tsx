import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { Link, graphql } from "gatsby";
import { ComponentNavigation } from "../components/ComponentNavigation";
import Seo from "../components/Seo";
import Wrapper from "../components/layouts/Wrapper";

export const query = graphql`
	query {
		allMdx(filter: { fields: { type: { eq: "foundations" } } }) {
			nodes {
				slug
				frontmatter {
					title
					description
				}
			}
		}
	}
`;

type OverviewTypes = {
	location: {
		pathname: string;
	};
	data: {
		allMdx: {
			nodes: [
				{
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

export default function ComponentsOverview(props: OverviewTypes) {
	const {
		data: {
			allMdx: { nodes }
		},
		location: { pathname }
	} = props;
	return (
		<Wrapper>
			<Grid>
				<GridItem cols={12}>
					<PageHeader
						heading="Foundations"
						lead="The foundations and patterns that are to be used for faster product development"
					/>
				</GridItem>
			</Grid>
			<Grid gutter="loose">
				<GridItem cols={12} sm={2}>
					<ComponentNavigation section="foundations" pathname={pathname} />
				</GridItem>
				<GridItem cols={12} sm={10}>
					<Grid
						gutter="loose"
						elementType="ul"
						className="list--unstyled width-100"
					>
						{nodes.map(({ slug, frontmatter: { title, description } }) => (
							<GridItem key={slug} cols={6} sm={4} md={3} elementType="li">
								<h2 className="h4">
									<Link to={"/" + slug}>{title}</Link>
								</h2>
								<p>{description}</p>
							</GridItem>
						))}
					</Grid>
				</GridItem>
			</Grid>
		</Wrapper>
	);
}
