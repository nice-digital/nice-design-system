import React from "react";
import PropTypes from "prop-types";

export const EnhancedPagination = ({ totalPages, currentPage }) => {
	// const range = (start, stop, step) =>
	// 	Array.from(
	// 		{ length: (stop - start) / step + 1 },
	// 		(_, i) => start + i * step
	// 	);
	// const pages = range(currentPage - 1, currentPage + 1, 1);

	// console.log(pages);

	// const pagesArray = [0, 1, 2, 3, 4, 5, 6, 7];
	// const sliced = pagesArray.slice(currentPage, currentPage + 3);
	// console.log("a range of pages starting at current page");
	// console.log(sliced);

	let pages = [];
	currentPage != 1 && pages.push("Previous page");
	pages.push(1);
	if (currentPage < 4) {
		//beginning
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
		<ul>
			{pages.map((page, i) => (
				<li key={i}>{page}</li>
			))}
		</ul>
	);
};

EnhancedPagination.propTypes = {
	totalPages: PropTypes.number,
	currentPage: PropTypes.number
};
