import React from "react";
import PropTypes from "prop-types";
import "./../scss/enhanced-pagination.scss";

export const EnhancedPagination = ({
	currentPage,
	elementType,
	method,
	nextPageDestination,
	previousPageDestination,
	pagesDestinations
}) => {
	// add possibility of buttons
	const ElementType = elementType || "a";

	const previousPageProps = {
		[method || (ElementType === "a" && "href") || "to"]: previousPageDestination
	};

	const nextPageProps = {
		[method || (ElementType === "a" && "href") || "to"]: nextPageDestination
	};

	// This sets up which pages numbers are going to be rendered
	let pages = [];
	const totalPages = Object.keys(pagesDestinations).length;
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

	// We then map the pagesDespinations to the pages we want to render
	const pagesToRender = [];
	pages.map(page =>
		pagesToRender.push({
			pageNumber: page,
			pageProp:
				page == "..."
					? undefined
					: {
							[method ||
							(ElementType === "a" && "href") ||
							"to"]: pagesDestinations[page - 1].destination
					  }
		})
	);

	return (
		<div className="pagination clearfix mt--a mb--e mr--b mb--b ml--b">
			<ul className="pagination__list">
				{currentPage != 1 && (
					<li className="pagination__page">
						<ElementType
							{...previousPageProps}
							className="pagination__page-link"
						>
							Previous page
						</ElementType>
					</li>
				)}
				{pagesToRender.map(page => (
					<li key={page.pageNumber} className="pagination__page">
						{currentPage == page.pageNumber || page.pageNumber == "..." ? (
							<span
								className={
									currentPage == page.pageNumber && "pagination__page__current"
								}
							>
								{page.pageNumber}
							</span>
						) : (
							<ElementType {...page.pageProp} className="pagination__page-link">
								{page.pageNumber}
							</ElementType>
						)}
					</li>
				))}
				{currentPage != totalPages && (
					<li className="pagination__page">
						<ElementType {...nextPageProps} className="pagination__page-link">
							Next page
						</ElementType>
					</li>
				)}
			</ul>
		</div>
	);
};

EnhancedPagination.propTypes = {
	currentPage: PropTypes.number,
	elementType: PropTypes.elementType,
	method: PropTypes.string,
	nextPageDestination: PropTypes.string,
	previousPageDestination: PropTypes.string,
	pagesDestinations: PropTypes.arrayOf(PropTypes.object)
};
