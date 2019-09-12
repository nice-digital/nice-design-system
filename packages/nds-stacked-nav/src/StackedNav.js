import React from "react";
import PropTypes from "prop-types";

import "./../scss/stacked-nav.scss";

const Heading = props => {
	const { labelTag: LabelTag = "p", label, link } = props;
	if (link) {
		const { linkTag: LinkTag = "a", isCurrent, destination } = link;
		const linkProps = {
			"aria-current": isCurrent ? "page" : "false"
		};
		if (LinkTag === "a") {
			linkProps.href = destination;
		} else {
			linkProps.to = destination;
		}
		return (
			<LabelTag className="stacked-nav__root">
				<LinkTag {...linkProps}>{label}</LinkTag>
			</LabelTag>
		);
	}
	return (
		<LabelTag className="stacked-nav__root stacked-nav__root--no-link">
			{label}
		</LabelTag>
	);
};

Heading.propTypes = {
	label: PropTypes.node,
	labelTag: PropTypes.elementType,
	link: PropTypes.shape({
		destination: PropTypes.string,
		isCurrent: PropTypes.bool,
		linkTag: PropTypes.node
	})
};

export const StackedNavLink = props => {
	const {
		hint,
		destination,
		isCurrent,
		linkTag: LinkTag = "a",
		children
	} = props;
	const label = props.label || children;
	if (!label) return null;
	const linkProps = {};
	linkProps["aria-current"] = isCurrent ? "true" : "false";
	if (LinkTag === "a") {
		linkProps.href = destination;
	} else if (LinkTag) {
		linkProps.to = destination;
	}
	return (
		<li className="stacked-nav__list-item">
			<LinkTag {...linkProps}>
				{hint ? (
					<>
						{label}
						<span className="stacked-nav__hint">{hint}</span>
					</>
				) : (
					label
				)}
			</LinkTag>
		</li>
	);
};

StackedNavLink.propTypes = {
	destination: PropTypes.node,
	isCurrent: PropTypes.bool,
	label: PropTypes.node,
	linkTag: PropTypes.elementType,
	hint: PropTypes.node,
	children: PropTypes.oneOfType([PropTypes.string])
};

export const StackedNav = props => {
	const { label, labelTag, link, children } = props;
	return (
		<nav className="stacked-nav" aria-label={label && label}>
			{label && <Heading label={label} labelTag={labelTag} link={link} />}
			{children && <ul className="stacked-nav__list">{children}</ul>}
		</nav>
	);
};

StackedNav.propTypes = {
	label: PropTypes.node,
	labelTag: PropTypes.elementType,
	link: PropTypes.shape({
		destination: PropTypes.string,
		isCurrent: PropTypes.bool,
		linkTag: PropTypes.node
	}),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(StackedNavLink),
		PropTypes.objectOf(StackedNavLink)
	])
};
