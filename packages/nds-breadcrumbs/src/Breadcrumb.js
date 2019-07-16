import React from "react";
import PropTypes from "prop-types";

export const Breadcrumb = props => {
	const { tag, href, children, ...attributes } = props;
	const LinkTag = tag || "a";
	return (
		<li className="breadcrumbs__crumb">
			<LinkTag href={href} {...attributes}>
				{children}
			</LinkTag>
		</li>
	);
};

Breadcrumb.propTypes = {
	tag: PropTypes.string, // Allow tag to be customised for custom routing integration
	children: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
};

Breadcrumb.defaultProps = {
	tag: "a"
};

export default Breadcrumb;
