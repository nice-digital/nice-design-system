import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";

type BreadcrumbsType = {
	currentSlug: string;
	currentId: string;
};

export type ResponseObjectType = {
	id: string;
	slug: string;
	frontmatter: {
		title: string;
		navigationLabel: string;
		order: number;
	};
};

type ResponseType = {
	allMdx: {
		nodes: ResponseObjectType[];
	};
};

export function BreadcrumbWrapper(props: BreadcrumbsType): React.ReactElement {
	const response: ResponseType = useStaticQuery(graphql`
		{
			allMdx {
				nodes {
					id
					slug
					frontmatter {
						navigationLabel
						title
						order
					}
				}
			}
		}
	`);

	const allNavigation = response.allMdx.nodes;

	const { currentSlug } = props;

	const crumbs = generateSpliceCrumbs(currentSlug);

	const CrumbElements = crumbs.map(({ destination, label }) => (
		<Breadcrumb key={label} to={destination}>
			{label}
		</Breadcrumb>
	));

	return <Breadcrumbs>{CrumbElements}</Breadcrumbs>;
}

function generateSpliceCrumbs(slug: string): LinksType {
	if (!slug) return [];
	let links = [];
	const segments = slug.split("/").filter(i => i);
	for (let i = 0; i < segments.length; i++) {
		const item = {
			label: segments[i].charAt(0).toUpperCase() + segments[i].slice(1),
			destination: "/" + segments.slice(0, i + 1).join("/") + "/"
		};
		links.push(item);
	}
	return links;
}

type LinksType = Array<LinkType>;

type LinkType = {
	label: string;
	destination: string;
};
