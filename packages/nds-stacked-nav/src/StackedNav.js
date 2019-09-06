import React from "react";
import PropTypes from "prop-types";

import "./../scss/stacked-nav.scss";

const Heading = props => {
	const { labelTag: LabelTag = "p", label, link = {} } = props;
	const { linkTag: LinkTag = "a", isCurrent, destination } = link;
	const linkProps = {};
	linkProps["aria-current"] = isCurrent ? "page" : "false";
	if (LinkTag && LinkTag === "a") {
		linkProps.href = destination;
	} else if (LinkTag) {
		linkProps.to = destination;
	}
	return (
		<LabelTag className="stacked-nav__root">
			{link ? <LinkTag {...linkProps}>{label}</LinkTag> : { label }}
		</LabelTag>
	);
};

Heading.propTypes = {
	label: PropTypes.node.isRequired,
	labelTag: PropTypes.elementType,
	link: PropTypes.shape({
		destination: PropTypes.string,
		isCurrent: PropTypes.bool,
		linkTag: PropTypes.node
	})
};

const Link = props => {
	const { destination, isCurrent, label, linkTag: LinkTag = "a" } = props;
	const linkProps = {};
	linkProps["aria-current"] = isCurrent ? "page" : "false";
	if (LinkTag && LinkTag === "a") {
		linkProps.href = destination;
	} else if (LinkTag) {
		linkProps.to = destination;
	}
	return (
		<li className="stacked-nav__list-item">
			<LinkTag {...linkProps}>{label}</LinkTag>
		</li>
	);
};

Link.propTypes = {
	destination: PropTypes.node,
	isCurrent: PropTypes.bool,
	label: PropTypes.node.isRequired,
	linkTag: PropTypes.elementType
};

export const StackedNav = props => {
	const { heading, links } = props;
	return (
		<nav className="stacked-nav" aria-label={heading.label}>
			<Heading {...heading} />
			{links && links.length && (
				<ul className="stacked-nav__list">
					{links.map((link, index) => (
						<Link {...link} key={`key-${index}`} />
					))}
				</ul>
			)}
		</nav>
	);
};

StackedNav.propTypes = {
	heading: PropTypes.shape(Heading.propTypes),
	links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes))
};
