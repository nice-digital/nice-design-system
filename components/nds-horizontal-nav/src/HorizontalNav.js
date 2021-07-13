import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./../scss/horizontal-nav.scss";

export const HorizontalNav = ({ className, children, ...rest }) => {
	return (
		<nav className={classnames("horizontal-nav", className)} {...rest}>
			<ul className="horizontal-nav__list">{children}</ul>
		</nav>
	);
};

export const HorizontalNavLink = ({
	title,
	isCurrent = false,
	destination,
	elementType: ElementType = "a",
	children,
	className,
	method,
	...rest
}) => {
	// Would like to make method a required prop in the future but not possible without a breaking change
	const props = {
		"aria-current": isCurrent,
		className: classnames("horizontal-nav__link", className),
		[method || (ElementType === "a" && "href") || "to"]: destination
	};
	return (
		<li className="horizontal-nav__item">
			<ElementType {...props} {...rest}>
				{title || children || destination || "No Link"}
			</ElementType>
		</li>
	);
};

HorizontalNav.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

HorizontalNavLink.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	isCurrent: PropTypes.bool,
	destination: PropTypes.string.isRequired,
	elementType: PropTypes.elementType,
	className: PropTypes.string,
	method: PropTypes.string
};
