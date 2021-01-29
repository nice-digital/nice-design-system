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
			nodes {
				path
				id
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

type IndexProps = {
	data: {
		site: {
			siteMetadata: {
				homeLabel: string;
				title: string;
				description: string;
			};
		};
		allSitePage: {
			nodes: Array<PageType>;
		};
	};
};

type PageType = {
	id: string;
	path: string;
};

export default function IndexPage(props: IndexProps): React.ReactElement {
	const { homeLabel, title, description } = props.data.site.siteMetadata;
	const { nodes: pages } = props.data.allSitePage;
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
						{pages.map((page: PageType) => {
							const { id, path } = page;
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
