import React from "react";
import PropTypes from "prop-types";

export const Breadcrumb = props => {
	const { elementType, to, children, ...attributes } = props;

	const innerTagProps = {
		...attributes
	};

	let InnerHtmlTag = "span";

	if (to) {
		InnerHtmlTag = elementType || "a";
		innerTagProps[InnerHtmlTag === "a" ? "href" : "to"] = to;
	}

	return (
		<li className="breadcrumbs__crumb">
			<InnerHtmlTag {...innerTagProps}>{children}</InnerHtmlTag>
		</li>
	);
};

Breadcrumb.propTypes = {
	elementType: PropTypes.elementType, // Allow tag to be customised for custom routing integration
	children: PropTypes.string.isRequired,
	to: PropTypes.string
};

Breadcrumb.defaultProps = {
	elementType: "a"
};
