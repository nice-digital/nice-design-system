import React from "react";
import { Hero } from "@nice-digital/nds-hero";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { graphql, Link } from "gatsby";
import Seo from "../components/partials/seo/Seo";
import Wrapper from "../components/layouts/Wrapper";

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
						<Breadcrumbs>
							<Breadcrumb>{homeLabel}</Breadcrumb>
						</Breadcrumbs>
					</>
				}
			/>
			<Grid>
				<GridItem cols={12} sm={4}>
					<h2>Source</h2>
					<p>
						<a href="https://github.com/nice-digital/nice-design-system">
							View the source on Github
						</a>
						.
					</p>
				</GridItem>
				<GridItem cols={12} sm={4}>
					<h2>Storybook</h2>
					<p>
						<a href="/storybook">Storybook</a> is an interactive gallery of all
						of the components and elements that make up the design system.
					</p>
				</GridItem>
				<GridItem cols={12} sm={4}>
					<h2>Get involved</h2>
					<p>
						Contributions to the design system are always welcome. They can take
						the form of{" "}
						<a
							rel="noreferrer"
							href="https://github.com/nice-digital/nice-design-system/issues"
						>
							raising issues
						</a>
						, research, and{" "}
						<a
							rel="noreferrer"
							target="_blank"
							href="https://github.com/nice-digital/nice-design-system/discussions"
						>
							discussions
						</a>{" "}
						as well as code contributions via pull requests.
					</p>
				</GridItem>
			</Grid>
			<hr />
			<Grid>
				<GridItem cols={12}>
					<h2>Sitemap</h2>
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
