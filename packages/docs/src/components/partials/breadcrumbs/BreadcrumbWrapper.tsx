import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import slugify from "slugify";

type BreadcrumbsType = {
	currentSlug: string;
};

export type ResponseObjectType = {
	slug: string;
	frontmatter: {
		title: string;
		navigationLabel: string;
	};
};

type ResponseType = {
	allMdx: {
		nodes: ResponseObjectType[];
	};
	site: {
		siteMetadata: {
			homeLabel: string;
		};
	};
};

export function BreadcrumbWrapper(props: BreadcrumbsType): React.ReactElement {
	const response: ResponseType = useStaticQuery(graphql`
		{
			allMdx {
				nodes {
					slug
					frontmatter {
						navigationLabel
						title
					}
				}
			}
			site {
				siteMetadata {
					homeLabel
				}
			}
		}
	`);

	const pageList = response.allMdx.nodes;

	const { currentSlug } = props;
	const { homeLabel } = response.site.siteMetadata;

	const crumbs = generateBreadcrumbs(currentSlug, homeLabel).map(
		getBreadcrumbLabel,
		pageList
	);

	const CrumbElements = crumbs.map((item: LinkType, index: number) => {
		if (index + 1 === crumbs.length) {
			item.destination = "";
		}
		return (
			<Breadcrumb key={item.label} to={item.destination} elementType={Link}>
				{item.label}
			</Breadcrumb>
		);
	});

	return <Breadcrumbs>{CrumbElements}</Breadcrumbs>;
}

function generateBreadcrumbs(
	currentSlug: string,
	homeLabel: string
): LinksType {
	if (!currentSlug) return [];
	let links = [
		{
			label: homeLabel,
			destination: "/"
		}
	];
	const segments = currentSlug.split("/").filter(i => i);
	for (let i = 0; i < segments.length; i++) {
		const item = {
			label: segments[i].charAt(0).toUpperCase() + segments[i].slice(1),
			destination: "/" + segments.slice(0, i + 1).join("/") + "/"
		};
		links.push(item);
	}
	return links;
}

function getBreadcrumbLabel(link: LinkType) {
	if (link.destination === "/") return link;
	const pageList = this;
	const match = pageList.filter((item: ResponseObjectType) => {
		return slugify(item.slug) === slugify(link.destination);
	});

	if (!match.length) {
		return link;
	}
	link.label =
		match[0].frontmatter.navigationLabel || match[0].frontmatter.title;
	return link;
}

type LinksType = Array<LinkType>;

type LinkType = {
	label: string;
	destination: string;
};
