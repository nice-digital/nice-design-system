import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, graphql } from "gatsby";
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";
import Seo from "../../components/partials/Seo";
import Wrapper from "../../components/layouts/Wrapper";

export const query = graphql`
	query($slug: String!, $sectionRegex: String!) {
		# Main page query
		mdx(fields: { slug: { eq: $slug } }) {
			id
			fields {
				slug
			}
			frontmatter {
				title
				description
				section
			}
			body
		}
		# Query to generate the navigation from
		allMdx(filter: { slug: { regex: $sectionRegex } }) {
			nodes {
				id
				fields {
					slug
				}
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
	pathContext: {
		sectionRegex: string;
	};
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
				section: string;
			};
			id: string;
			body: string;
			fields: {
				slug: string;
			};
		};
		allMdx: {
			nodes: [
				{
					id: string;
					fields: {
						slug: string;
					};
					frontmatter: {
						title: string;
						description: string;
					};
				}
			];
		};
	};
};

export default function Overview(props: OverviewTypes) {
	const {
		location: { pathname }
	} = props;

	const {
		body,
		fields: { slug },
		frontmatter: { title, description }
	} = props.data.mdx;

	const { nodes } = props.data.allMdx;

	const labelProps = {
		label: title,
		link: {
			elementType: Link,
			destination: slug,
			isCurrent: pathname === slug
		}
	};

	return (
		<Wrapper className="pt--e">
			<Grid>
				<GridItem cols={12}>
					<PageHeader heading={title} lead={description} />
				</GridItem>
			</Grid>
			<Grid gutter="loose">
				<GridItem cols={12} sm={3} md={2}>
					<StackedNav {...labelProps}>
						{nodes.map(({ id, fields: { slug }, frontmatter: { title } }) => {
							return (
								<StackedNavLink key={id} destination={slug} elementType={Link}>
									{title}
								</StackedNavLink>
							);
						})}
					</StackedNav>
				</GridItem>

				<GridItem cols={12} sm={9} md={10}>
					{body && <MDXRenderer>{body}</MDXRenderer>}
					<Grid
						gutter="loose"
						elementType="ul"
						className="list--unstyled width-100"
					>
						{nodes.map(
							({
								id,
								fields: { slug },
								frontmatter: { title, description }
							}) => (
								<GridItem key={id} cols={6} sm={4} md={3} elementType="li">
									<h2 className="h4">
										<Link to={slug}>{title}</Link>
									</h2>
									<p>{description}</p>
								</GridItem>
							)
						)}
					</Grid>
				</GridItem>
			</Grid>
		</Wrapper>
	);
}
