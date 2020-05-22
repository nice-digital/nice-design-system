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
		previousAriaLabel
	} = props;

	return (
		<div className="simple-pagination">
			<p>
				Page <b>{currentPage}</b> of <b>{totalPages}</b>
			</p>
			<nav aria-label="Pagination navigation">
				<span className="simple-pagination__link-wrapper">
					{nextPageLink && (
						<a
							className="simple-pagination__link"
							href={nextPageLink}
							onClick={e => handleEvent(e, "next")}
							aria-label={nextAriaLabel}
						>
							Next page
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
							Previous page
						</a>
					</span>
				)}
			</nav>
		</div>
	);
};

SimplePagination.propTypes = {
	nextPageLink: PropTypes.string || undefined,
	previousPageLink: PropTypes.string || undefined,
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	nextAriaLabel: PropTypes.string.isRequired,
	previousAriaLabel: PropTypes.string.isRequired
};

SimplePagination.defaultProps = {
	nextAriaLabel: "Next page",
	previousAriaLabel: "Previous page"
};
