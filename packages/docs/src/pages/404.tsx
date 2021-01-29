import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { graphql, Link } from "gatsby";
import Seo from "../components/partials/seo/Seo";
import Wrapper from "../components/layouts/Wrapper";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { PageHeader } from "@nice-digital/nds-page-header";

interface I404 {
	data: {
		allSitePage: {
			nodes: Array<NodeType>;
		};
		site: {
			siteMetadata: {
				homeLabel: string;
			};
		};
	};
}

type NodeType = {
	path: string;
	id: string;
};

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
			}
		}
	}
`;

export default function FourOhFour(props: I404): React.ReactElement {
	const { homeLabel } = props.data.site.siteMetadata;
	const { nodes: allPages } = props.data.allSitePage;
	return (
		<Wrapper>
			<Seo title="Page not found" />
			<Breadcrumbs>
				<Breadcrumb to="/">{homeLabel}</Breadcrumb>
				<Breadcrumb>Page not found</Breadcrumb>
			</Breadcrumbs>
			<PageHeader
				heading="Page not found"
				lead="A full sitemap can be found on this page."
			/>
			<Grid>
				<GridItem cols={12}>
					<ul>
						{allPages.map((page: NodeType) => {
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
