import React from "react";
import PropTypes from "prop-types";

export const Breadcrumb = props => {
	const { tag, to, children, ...attributes } = props;

	const innerTagProps = {
		...attributes
	};

	let InnerHtmlTag = "span";

	if (to) {
		InnerHtmlTag = tag || "a";
		innerTagProps[InnerHtmlTag === "a" ? "href" : "to"] = to;
	}

	return (
		<li className="breadcrumbs__crumb">
			<InnerHtmlTag {...innerTagProps}>{children}</InnerHtmlTag>
		</li>
	);
};

Breadcrumb.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]), // Allow tag to be customised for custom routing integration
	children: PropTypes.string.isRequired,
	to: PropTypes.string
};

Breadcrumb.defaultProps = {
	tag: "a"
};
