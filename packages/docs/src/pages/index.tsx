import React from "react";
import { Hero } from "@nice-digital/nds-hero";
import { Grid, GridItem } from "@nice-digital/nds-grid";
// @ts-ignore
import { PhaseBanner } from "@nice-digital/nds-phase-banner";
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
				header={
					<PhaseBanner phase="alpha">
						NICE Design System is in development. This means it is not feature
						complete and there may be issues. Find any? Please,{" "}
						<a
							href="https://github.com/nice-digital/nice-design-system/issues"
							target="_blank"
							rel="noreferrer"
						>
							let us know
						</a>
						!
					</PhaseBanner>
				}
				actions={
					<>
						<Link to="/about/getting-started" className="btn btn--cta">
							Get started
						</Link>
						<a
							href="https://github.com/nice-digital/nice-design-system"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							View it on Github
						</a>
					</>
				}
			>
				<h2 className="h4 mt--0-md">Quick links</h2>
				<ul className="list--unstyled">
					<li>
						<Link to="/foundations">Foundations</Link>
					</li>
					<li>
						<Link to="/components">Components</Link>
					</li>
					<li>
						<Link to="/technical">Technical</Link>
					</li>
					<li>
						<Link to="/about">About the Design System</Link>
					</li>
				</ul>
			</Hero>
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
