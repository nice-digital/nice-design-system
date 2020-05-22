import React, { Component } from "react";
import PropTypes from "prop-types";

import "./../scss/simple-pagination.scss";

export const SimplePagination = props => {
	function handleEvent(e, action) {
		e.preventDefault();
		props.handlePageEvent(action);
	}

	const {
		nextPageLink,
		previousPageLink,
		currentPage,
		totalPages,
		nextAriaLabel,
		previousAriaLabel,
		nextLinkText,
		previousLinkText
	} = props;

	return (
		<div className="simple-pagination">
			{currentPage && (
				<p>
					Page <b>{currentPage}</b>{" "}
					{totalPages && (
						<>
							of <b>{totalPages}</b>
						</>
					)}
				</p>
			)}
			<nav aria-label="Pagination navigation">
				<span className="simple-pagination__link-wrapper">
					{nextPageLink && (
						<a
							className="simple-pagination__link"
							href={nextPageLink}
							onClick={e => handleEvent(e, "next")}
							aria-label={nextAriaLabel}
						>
							{nextLinkText}
						</a>
					)}
				</span>
				{previousPageLink && (
					<span className="simple-pagination__link-wrapper">
						<a
							className="simple-pagination__link"
							href={previousPageLink}
							onClick={e => handleEvent(e, "previous")}
							aria-label={previousAriaLabel}
						>
							{previousLinkText}
						</a>
					</span>
				)}
			</nav>
		</div>
	);
};

SimplePagination.propTypes = {
	nextLinkText: PropTypes.string.isRequired,
	previousLinkText: PropTypes.string.isRequired,
	nextPageLink: PropTypes.string || PropTypes.bool,
	previousPageLink: PropTypes.string || PropTypes.bool,
	currentPage: PropTypes.number,
	totalPages: PropTypes.number,
	nextAriaLabel: PropTypes.string.isRequired,
	previousAriaLabel: PropTypes.string.isRequired,
	handlePageEvent: PropTypes.func.isRequired
};

SimplePagination.defaultProps = {
	nextPageLink: true,
	previousPageLink: true,
	nextAriaLabel: "Next page",
	previousAriaLabel: "Previous page",
	nextLinkText: "Next page",
	previousLinkText: "Previous page"
};
