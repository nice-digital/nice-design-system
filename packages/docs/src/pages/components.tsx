import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { Link, graphql } from "gatsby";
import { ComponentNavigation } from "../components/ComponentNavigation";
import Seo from "../components/Seo";
import Wrapper from "../components/layouts/Wrapper";

export const query = graphql`
	query {
		allMdx(filter: { fields: { type: { eq: "components" } } }) {
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
						heading="Components"
						lead="Once you've mastered the foundations, these components are further patterns for building user interfaces."
					/>
				</GridItem>
			</Grid>
			<Grid gutter="loose">
				<GridItem cols={12} sm={2}>
					<ComponentNavigation section="components" pathname={pathname} />
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
