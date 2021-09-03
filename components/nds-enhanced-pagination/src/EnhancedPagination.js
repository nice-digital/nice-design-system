import React from "react";
import PropTypes from "prop-types";
import "./../scss/enhanced-pagination.scss";

export const EnhancedPagination = ({
	currentPage,
	elementType,
	method,
	nextPageDestination,
	previousPageDestination,
	pagesDestinations,
	onClick
}) => {
	const ElementType = onClick ? "button" : elementType || "a";
	const action = onClick
		? "onClick"
		: method || (ElementType === "a" && "href") || "to";

	const previousPageProps = {
		[action]: previousPageDestination
	};

	const nextPageProps = {
		[action]: nextPageDestination
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

	// We then map the pagesDestinations to the pages we want to render
	const pagesToRender = [];
	pages.map(page =>
		pagesToRender.push({
			pageNumber: page,
			pageProp:
				page == "..."
					? undefined
					: { [action]: pagesDestinations[page - 1].destination }
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

const PagesDestinationsType = PropTypes.shape({
	destination: PropTypes.string
});

EnhancedPagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	pagesDestinations: PropTypes.arrayOf(PropTypes.PagesDestinationsType)
		.isRequired,
	previousPageDestination: PropTypes.string.isRequired,
	nextPageDestination: PropTypes.string.isRequired,
	elementType: PropTypes.elementType,
	method: PropTypes.string,
	onClick: PropTypes.func
};
