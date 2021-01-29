import React from "react";
import { Hero } from "@nice-digital/nds-hero";
import { Grid, GridItem } from "@nice-digital/nds-grid";
// @ts-ignore
import { PhaseBanner } from "@nice-digital/nds-phase-banner";
import { graphql, Link } from "gatsby";
import Seo from "../components/partials/seo/Seo";
import Wrapper from "../components/layouts/Wrapper";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

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
		site {
			siteMetadata {
				homeLabel
				title
				description
			}
		}
	}
`;

export default function IndexPage(props: any) {
	const { homeLabel, title, description } = props.data.site.siteMetadata;
	return (
		<Wrapper>
			<Seo title="Home" description={description} />
			<Hero
				title={title}
				intro={description}
				header={
					<>
						<PhaseBanner phase="alpha">
							NICE Design System is in development. This means it is not feature
							complete and there may be issues. If you find any, please,{" "}
							<a
								href="https://github.com/nice-digital/nice-design-system/issues"
								target="_blank"
								rel="noreferrer noopener"
							>
								let us know
							</a>
							!
						</PhaseBanner>
						<Breadcrumbs>
							<Breadcrumb>{homeLabel}</Breadcrumb>
						</Breadcrumbs>
					</>
				}
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
