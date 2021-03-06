import React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { Button } from "@nice-digital/nds-button";
import { InPageNav } from "@nice-digital/nds-in-page-nav";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Seo from "../../components/partials/seo/Seo";
import Wrapper from "./Wrapper";
import { Navigation } from "../partials/navigation/Navigation";
import { BreadcrumbWrapper } from "../partials/breadcrumbs/BreadcrumbWrapper";

const npmPath = "https://www.npmjs.com/package/@nice-digital/";
const storybookPath = "/storybook/?path=/story/";
const githubPath =
	"https://github.com/nice-digital/nice-design-system/blob/main/";

type DetailLayoutType = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
				inpagenav: boolean;
				storybook: string;
				npm: string;
				github: string;
			};
			tableOfContents: {
				items: TableOfContentsItemType[];
			};
			slug: string;
			id: string;
			body: string;
		};
	};
};

type TableOfContentsItemType = {
	title: string;
	url: string;
	items: TableOfContentsItemType[] | undefined;
};

export const query = graphql`
	query($slug: String!) {
		mdx(slug: { eq: $slug }) {
			slug
			id
			frontmatter {
				title
				description
				inpagenav
				storybook
				npm
				github
			}
			tableOfContents
			body
		}
	}
`;

export default function DetailLayout(
	props: DetailLayoutType
): React.ReactElement {
	const {
		body,
		slug,
		frontmatter: {
			title,
			description,
			inpagenav = false,
			storybook,
			npm,
			github
		},
		id,
		tableOfContents: { items }
	} = props.data.mdx;

	return (
		<Wrapper>
			<Seo title={title} description={description} />
			<BreadcrumbWrapper currentSlug={slug} />
			<PageHeader heading={title} lead={description} />
			<Grid gutter="loose">
				<GridItem sm={2}>
					<Navigation currentSlug={slug} currentId={id} />
				</GridItem>
				<GridItem sm={inpagenav ? 8 : 10}>
					{(storybook || npm || github) && (
						<p>
							{storybook && (
								<Button
									elementType="a"
									to={storybookPath + storybook}
									target="_blank"
								>
									View in Storybook
								</Button>
							)}
							{npm && (
								<Button
									elementType="a"
									to={npmPath + npm}
									target="_blank"
									rel="noreferrer nofollow"
								>
									View on NPM
								</Button>
							)}
							{github && (
								<Button
									elementType="a"
									to={githubPath + github}
									target="_blank"
									rel="noreferrer nofollow"
								>
									View Source on Github
								</Button>
							)}
						</p>
					)}
					<main>
						<MDXRenderer>{body}</MDXRenderer>
					</main>
				</GridItem>
				{inpagenav ? (
					<GridItem sm={2}>
						<InPageNav />
					</GridItem>
				) : (
					<></>
				)}
			</Grid>
		</Wrapper>
	);
}
