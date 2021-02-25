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
			<p className="lead">
				The NICE Design System provides a markup framework and additional
				resources to enable developers and designers to build consistent
				interfaces more easily.
			</p>
			<p>
				The components adhere to current accessibility and usability best
				practice. We publish React components to NPM and include example HTML
				snippets for use when prototyping or building pages inside a CMS.
			</p>
			<p>
				24 Febrary 2020 marks the{" "}
				<a href="https://github.com/nice-digital/nice-design-system/releases/tag/%40nice-digital%2Fdesign-system%401.1.1">
					release of the first non-alpha version
				</a>{" "}
				of the design system, along with this new documentation which will be
				added to in the coming weeks.
			</p>
			<hr />
			<Grid gutter={"loose"}>
				<GridItem cols={12} sm={4}>
					<h2>Source</h2>
					<p>
						<a
							href="https://github.com/nice-digital/nice-design-system"
							target="_blank"
							rel="noopener noreferrer"
						>
							Browse the source on Github
						</a>{" "}
						or see the{" "}
						<a
							href="http://npmjs.com/package/@nice-digital/design-system"
							target="_blank"
							rel="noopener noreferrer"
						>
							latest version published on NPM
						</a>
						. .
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
						as well as code contributions via
						<a
							href="https://github.com/nice-digital/nice-design-system/pulls"
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							pull requests
						</a>
						.
					</p>
				</GridItem>
			</Grid>
			<hr />
			<Grid>
				<GridItem cols={12}>
					<h2>Sitemap</h2>
					<p>
						Until we have a nice navigation sorted, enjoy a long list of every
						page in the docs.
					</p>
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
