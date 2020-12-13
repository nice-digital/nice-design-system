import React from "react";
import { Hero } from "@nice-digital/nds-hero";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { graphql, Link } from "gatsby";
import Seo from "../components/partials/Seo";
import Wrapper from "../components/layouts/Wrapper";

export const query = graphql`
	{
		allSitePage {
			edges {
				node {
					path
					id
				}
			}
		}
	}
`;

export default function IndexPage(props: any) {
	return (
		<Wrapper>
			<Seo title="NICE Design System" />
			<Hero
				title="NICE Design System"
				intro="Your source for quickly creating consistent on-brand NICE digital services"
			/>

			<Grid>
				<GridItem cols={12}>
					<ul>
						{props.data.allSitePage.edges.map((edge: any) => {
							let { id, path } = edge.node;
							return (
								<li key={id}>
									<Link to={path}>{path}</Link>
								</li>
							);
						})}
					</ul>
				</GridItem>
			</Grid>
		</Wrapper>
	);
}
