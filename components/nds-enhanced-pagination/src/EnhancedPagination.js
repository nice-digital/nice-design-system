import React from "react";
import PropTypes from "prop-types";
import "./../scss/enhanced-pagination.scss";

export const EnhancedPagination = ({ totalPages, currentPage }) => {
	let pages = [];

	pages.push(1);
	if (currentPage < 4) {
		//beginning
		if (totalPages < 5) {
			for (let i = 2; i < totalPages; i++) {
				pages.push(i);
			}
		} else {
			pages.push(2, 3, 4);
			totalPages > 5 && pages.push("...");
		}
	} else if (currentPage > totalPages - 3) {
		//end
		totalPages > 5 && pages.push("...");
		pages.push(totalPages - 3, totalPages - 2, totalPages - 1);
	} else {
		//middle
		totalPages > 5 && pages.push("...");
		pages.push(currentPage - 1, currentPage, currentPage + 1);
		totalPages > 5 && pages.push("...");
	}
	totalPages != 1 && pages.push(totalPages);

	return (
		<div className="pagination clearfix mt--a mb--e mr--b mb--b ml--b">
			<ul className="pagination__list">
				{currentPage != 1 && (
					<li className="pagination__page">Previous page</li>
				)}
				{pages.map((page, i) => (
					<li key={i} className="pagination__page">
						{currentPage == page || page == "..." ? (
							<span
								className={currentPage == page && "pagination__page__current"}
							>
								{page}
							</span>
						) : (
							<a href="" className="pagination__page-link">
								{page}
							</a>
						)}
					</li>
				))}
				{currentPage != totalPages && (
					<li className="pagination__page">Next page</li>
				)}
			</ul>
		</div>
	);
};

EnhancedPagination.propTypes = {
	totalPages: PropTypes.number,
	currentPage: PropTypes.number
};
