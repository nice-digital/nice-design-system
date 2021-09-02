import React from "react";
import PropTypes from "prop-types";
import "./../scss/enhanced-pagination.scss";

export const EnhancedPagination = ({ totalPages, currentPage }) => {
	// const pagesArray = [0, 1, 2, 3, 4, 5, 6, 7];
	// const sliced = pagesArray.slice(currentPage, currentPage + 3);
	// console.log("a range of pages starting at current page");
	// console.log(sliced);

	let pages = [];
	currentPage != 1 && pages.push("Previous page");
	pages.push(1);
	if (currentPage < 4) {
		//beginning
		// stuff for when its less than 4 pages
		pages.push(2, 3, 4);
		totalPages > 5 && pages.push("...");
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
	pages.push(totalPages);
	currentPage != totalPages && pages.push("Next page");

	return (
		<div className="pagination clearfix mt--a mb--e mr--b mb--b ml--b">
			<ul className="pagination__list">
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
			</ul>
		</div>
	);
};

EnhancedPagination.propTypes = {
	totalPages: PropTypes.number,
	currentPage: PropTypes.number
};
