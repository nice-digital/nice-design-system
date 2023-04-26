import { ReactElement, ReactNode } from "react";
import { type BreadcrumbProps } from "./Breadcrumb";

import { Breadcrumb } from "./Breadcrumb";
import "../scss/breadcrumbs.scss";

export { Breadcrumb };

export interface BreadcrumbsProps {
	[prop: string]: unknown;
	className?: string;
	children: ValidBreadcrumbProp[] | ValidBreadcrumbProp;
}

type ValidBreadcrumbProp = ReactElement<BreadcrumbProps> | null | undefined;

const stringify = (data: Object) => {
	if (process.env.NODE_ENV === "production") return JSON.stringify(data);
	return JSON.stringify(data, null, 2);
};

const getBreadcrumbJsonLdItem = (
	breadcrumb: ValidBreadcrumbProp,
	index = 0
) => ({
	"@type": "ListItem",
	position: index + 1,
	item: {
		"@id": breadcrumb?.props.to,
		name: breadcrumb?.props.children
	}
});

export const Breadcrumbs = ({ children, ...rest }: BreadcrumbsProps) => {
	const jsonLdData = {
		"@context": "http://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: Array.isArray(children)
			? children.filter(Boolean).map(getBreadcrumbJsonLdItem)
			: getBreadcrumbJsonLdItem(children)
	};

	return (
		<>
			<nav
				aria-label="Breadcrumbs"
				role="navigation"
				data-component="breadcrumbs"
				{...rest}
			>
				<ol className="breadcrumbs">{children}</ol>
			</nav>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: stringify(jsonLdData) }}
			/>
		</>
	);
};
