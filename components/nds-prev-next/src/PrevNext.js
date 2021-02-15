import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./../scss/prev-next.scss";

const Link = ({ text, destination, elementType: LinkTag = "a", intro }) => {
	let linkProps = {
		className: "prev-next__link"
	};
	if (LinkTag === "a") {
		linkProps.href = destination;
	} else {
		linkProps.to = destination;
	}
	return (
		<LinkTag {...linkProps}>
			<span className="prev-next__link-intro">{intro}</span>
			<span className="prev-next__link-text">{text}</span>
		</LinkTag>
	);
};

export const PrevNext = props => {
	const { nextPageLink, previousPageLink, className, ...rest } = props;

	const nextLinkProps = {
		intro: nextPageLink?.intro || "Next page",
		text: nextPageLink?.text || nextPageLink?.destination,
		destination: nextPageLink?.destination,
		elementType: nextPageLink?.elementType
	};

	const previousLinkProps = {
		intro: previousPageLink?.intro || "Previous page",
		text: previousPageLink?.text || previousPageLink?.destination,
		destination: previousPageLink?.destination,
		elementType: previousPageLink?.elementType
	};

	return (
		<div className={classnames("prev-next", className)} {...rest}>
			{(nextPageLink || previousPageLink) && (
				<nav aria-label="Previous and next pages">
					{previousPageLink && <Link {...previousLinkProps} />}

					{nextPageLink && <Link {...nextLinkProps} />}
				</nav>
			)}
		</div>
	);
};

PrevNext.propTypes = {
	/**
	 * Object to represent the next page link
	 */
	nextPageLink: PropTypes.objectOf(Link),
	/**
		Object to represent the previous page link
	 */
	previousPageLink: PropTypes.objectOf(Link),
	/**
	 * Any additional classes to be passed to the parent div
	 */
	className: PropTypes.string
};

Link.propTypes = {
	text: PropTypes.string,
	destination: PropTypes.string.isRequired,
	elementType: PropTypes.elementType,
	intro: PropTypes.string
};
