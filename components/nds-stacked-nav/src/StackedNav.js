import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

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
		children,
		nested
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
				<span className="stacked-nav__content-wrapper">
					{hint ? (
						<>
							{label}
							<span className="stacked-nav__hint">{hint}</span>
						</>
					) : (
						label
					)}
				</span>
			</ElementType>
			{nested && <ul className="stacked-nav__nested">{nested}</ul>}
		</li>
	);
};

StackedNavLink.propTypes = {
	destination: PropTypes.string,
	isCurrent: PropTypes.bool,
	label: PropTypes.node,
	elementType: PropTypes.elementType,
	hint: PropTypes.node,
	children: PropTypes.node,
	nested: PropTypes.node
};

export const StackedNav = props => {
	const { label, elementType, link, children, className, ...rest } = props;
	const classNames = classnames(["stacked-nav", className]);
	return (
		<nav className={classNames} {...rest}>
			{label && <Heading label={label} elementType={elementType} link={link} />}
			{children && <ul className="stacked-nav__list">{children}</ul>}
		</nav>
	);
};

StackedNav.propTypes = {
	label: PropTypes.node,
	className: PropTypes.string,
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
