import React from "react";
import PropTypes from "prop-types";

import "./../scss/stacked-nav.scss";

const Heading = props => {
	const { elementType: ElementType = "p", label, link } = props;
	if (link) {
		const { elementType: LinkElementType = "a", isCurrent, destination } = link;
		const linkProps = {
			"aria-current": isCurrent ? "true" : "false"
		};
		if (LinkElementType === "a") {
			linkProps.href = destination;
		} else {
			linkProps.to = destination;
		}
		return (
			<ElementType className="stacked-nav__root">
				<LinkElementType {...linkProps}>{label}</LinkElementType>
			</ElementType>
		);
	}
	return (
		<ElementType className="stacked-nav__root stacked-nav__root--no-link">
			{label}
		</ElementType>
	);
};

Heading.propTypes = {
	label: PropTypes.node,
	elementType: PropTypes.elementType,
	link: PropTypes.shape({
		destination: PropTypes.string,
		isCurrent: PropTypes.bool,
		elementType: PropTypes.elementType
	})
};

export const StackedNavLink = props => {
	const {
		hint,
		destination,
		isCurrent,
		elementType: ElementType = "a",
		children
	} = props;
	const label = props.label || children;
	if (!label) return null;
	const linkProps = {};
	linkProps["aria-current"] = isCurrent ? "true" : "false";
	if (ElementType === "a") {
		linkProps.href = destination;
	} else if (ElementType) {
		linkProps.to = destination;
	}
	return (
		<li className="stacked-nav__list-item">
			<ElementType {...linkProps}>
				{hint ? (
					<>
						{label}
						<span className="stacked-nav__hint">{hint}</span>
					</>
				) : (
					label
				)}
			</ElementType>
		</li>
	);
};

StackedNavLink.propTypes = {
	destination: PropTypes.string,
	isCurrent: PropTypes.bool,
	label: PropTypes.node,
	elementType: PropTypes.elementType,
	hint: PropTypes.node,
	children: PropTypes.node
};

export const StackedNav = props => {
	const { label, elementType, link, children } = props;
	return (
		<nav className="stacked-nav" aria-label={label && label}>
			{label && <Heading label={label} elementType={elementType} link={link} />}
			{children && <ul className="stacked-nav__list">{children}</ul>}
		</nav>
	);
};

StackedNav.propTypes = {
	label: PropTypes.node,
	elementType: PropTypes.elementType,
	link: PropTypes.shape({
		destination: PropTypes.string,
		isCurrent: PropTypes.bool,
		elementType: PropTypes.elementType
	}),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(StackedNavLink),
		PropTypes.objectOf(StackedNavLink)
	]).isRequired
};
