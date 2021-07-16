import React from "react";
import PropTypes from "prop-types";

export const Breadcrumb = props => {
	const { elementType, method, to, children, ...attributes } = props;

	let ElementType = elementType || "span";

	const innerTagProps = {
		...attributes
	};

	if (to) {
		ElementType = elementType || "a";
		innerTagProps[method || (ElementType === "a" && "href") || "to"] = to;
	}

	return (
		<li className="breadcrumbs__crumb">
			<ElementType {...innerTagProps}>{children}</ElementType>
		</li>
	);
};

Breadcrumb.propTypes = {
	elementType: PropTypes.elementType, // Allow tag to be customised for custom routing integration
	children: PropTypes.string.isRequired,
	to: PropTypes.string,
	method: PropTypes.string
};
