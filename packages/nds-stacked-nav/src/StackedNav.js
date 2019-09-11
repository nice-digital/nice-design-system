import React from "react";
import PropTypes from "prop-types";

import "./../scss/stacked-nav.scss";

const Heading = props => {
	const { labelTag: LabelTag = "p", label, link } = props;
	if (link) {
		const linkProps = {};
		const { linkTag: LinkTag = "a", isCurrent, destination } = link;
		linkProps["aria-current"] = isCurrent ? "page" : "false";
		if (LinkTag && LinkTag === "a") {
			linkProps.href = destination;
		} else if (LinkTag) {
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

const Link = props => {
	const { hint, destination, isCurrent, label, linkTag: LinkTag = "a" } = props;
	const linkProps = {};
	linkProps["aria-current"] = isCurrent ? "page" : "false";
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

Link.propTypes = {
	destination: PropTypes.node,
	isCurrent: PropTypes.bool,
	label: PropTypes.node.isRequired,
	linkTag: PropTypes.elementType,
	hint: PropTypes.node
};

export const StackedNav = props => {
	const { heading, links } = props;
	return (
		<nav className="stacked-nav" aria-label={heading && heading.label}>
			{heading && <Heading {...heading} />}
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
