import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./../scss/horizontal-nav.scss";

export const HorizontalNav = ({ children, ...rest }) => {
	return (
		<nav className="horizontal-nav" {...rest}>
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
	...rest
}) => {
	const props = {
		"aria-current": isCurrent,
		className: classnames("horizontal-nav__link", className)
	};
	if (ElementType === "a") {
		props.href = destination;
	} else {
		props.to = destination;
	}
	return (
		<li className="horizontal-nav__item">
			<ElementType {...props} {...rest}>
				{children || title}
			</ElementType>
		</li>
	);
};

HorizontalNav.propTypes = {
	children: PropTypes.node
};

HorizontalNavLink.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	isCurrent: PropTypes.bool,
	destination: PropTypes.string,
	elementType: PropTypes.element,
	className: PropTypes.string
};
