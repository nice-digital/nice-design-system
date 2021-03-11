import React from "react";
import PropTypes from "prop-types";

import { Breadcrumb } from "./Breadcrumb";
import "../scss/breadcrumbs.scss";

export { Breadcrumb };

const stringify = (data: any) => {
	if (process.env.NODE_ENV === "production") return JSON.stringify(data);
	return JSON.stringify(data, null, 2);
};

const getBreadcrumbJsonLdItem = (breadcrumb, index = 0) => ({
	"@type": "ListItem",
	position: index + 1,
	item: {
		"@id": breadcrumb.props.to,
		name: breadcrumb.props.children
	}
});

export const Breadcrumbs = ({ children }) => {
	const jsonLdData = {
		"@context": "http://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: children.length
			? children.filter(Boolean).map(getBreadcrumbJsonLdItem)
			: getBreadcrumbJsonLdItem(children)
	};

	return (
		<>
			<nav aria-label="Breadcrumbs" role="navigation">
				<ol className="breadcrumbs">{children}</ol>
			</nav>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: stringify(jsonLdData) }}
			/>
		</>
	);
};

Breadcrumbs.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(Breadcrumb),
		PropTypes.objectOf(Breadcrumb)
	]).isRequired
};
