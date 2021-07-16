import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./../scss/simple-pagination.scss";

const Link = ({
	text,
	destination,
	elementType: ElementType = "a",
	method
}) => {
	let linkProps = {
		className: "simple-pagination__link",
		[method || (ElementType === "a" && "href") || "to"]: destination
	};

	return (
		<span className="simple-pagination__link-wrapper">
			<ElementType {...linkProps}>{text}</ElementType>{" "}
		</span>
	);
};

Link.propTypes = {
	text: PropTypes.string,
	destination: PropTypes.string,
	elementType: PropTypes.elementType,
	method: PropTypes.string
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
		elementType: nextPageLink && nextPageLink.elementType,
		method: nextPageLink && nextPageLink.method
	};

	const previousLinkProps = {
		text: "Previous page",
		destination: previousPageLink && previousPageLink.destination,
		elementType: previousPageLink && previousPageLink.elementType,
		method: previousPageLink && previousPageLink.method
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

SimplePagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	nextPageLink: PropTypes.objectOf(Link),
	previousPageLink: PropTypes.objectOf(Link),
	totalPages: PropTypes.number,
	className: PropTypes.string
};

SimplePagination.defaultProps = {
	currentPage: 1,
	totalPages: null,
	nextPageLink: null,
	previousPageLink: null
};
