import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./../scss/simple-pagination.scss";

const Link = ({ text, destination, elementType: LinkTag = "a" }) => {
	let linkProps = {
		className: "simple-pagination__link"
	};
	if (LinkTag === "a") {
		linkProps.href = destination;
	} else {
		linkProps.to = destination;
	}
	return (
		<span className="simple-pagination__link-wrapper">
			<LinkTag {...linkProps}>{text}</LinkTag>{" "}
		</span>
	);
};

export const SimplePagination = props => {
	const {
		currentPage,
		totalPages,
		nextPageLink,
		previousPageLink,
		className,
		...rest
	} = props;

	const nextLinkProps = {
		text: "Next page",
		destination: nextPageLink && nextPageLink.destination,
		elementType: nextPageLink && nextPageLink.elementType
	};

	const previousLinkProps = {
		text: "Previous page",
		destination: previousPageLink && previousPageLink.destination,
		elementType: previousPageLink && previousPageLink.elementType
	};

	return (
		<div className={classnames("simple-pagination", className)} {...rest}>
			{currentPage && (
				<p>
					Page <b>{currentPage}</b>
					{totalPages && (
						<>
							{" "}
							of <b>{totalPages}</b>
						</>
					)}
				</p>
			)}
			{(nextPageLink || previousPageLink) && (
				<nav aria-label="Pagination">
					{nextPageLink && <Link {...nextLinkProps} />}
					{previousPageLink && <Link {...previousLinkProps} />}
				</nav>
			)}
		</div>
	);
};

const LinkPropTypes = PropTypes.shape({
	destination: PropTypes.node,
	element: PropTypes.elementType
});

SimplePagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	nextPageLink: LinkPropTypes,
	previousPageLink: LinkPropTypes,
	totalPages: PropTypes.number
};

SimplePagination.defaultProps = {
	currentPage: 1,
	totalPages: null,
	nextPageLink: null,
	previousPageLink: null
};
