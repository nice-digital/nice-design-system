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
	// onclick - if we have this, is it the same for all?? probably not right? what does that look like? need to bring through for each current destination

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

	const totalPages = Object.keys(pagesDestinations).length;

	const calculatePosition = currentPage => {
		if (currentPage <= 3) return "early";
		if (totalPages - currentPage <= 3) return "late";
		return "middle";
	};

	const addNumberedPages = array => {
		array.push(1, totalPages != 1 && totalPages);
		switch (calculatePosition(currentPage)) {
			case "early":
				if (totalPages < 5) {
					for (let i = 2; i < totalPages; i++) {
						array.splice(1, 0, i);
					}
				} else {
					array.splice(1, 0, 2, 3, 4);
				}
				break;
			case "late":
				array.splice(1, 0, totalPages - 3, totalPages - 2, totalPages - 1);
				break;
			default:
				array.splice(1, 0, currentPage - 1, currentPage, currentPage + 1);
		}
	};

	const addEllipses = array => {
		switch (calculatePosition(currentPage)) {
			case "early":
				pages.splice(array.length - 1, 0, "...");
				break;
			case "late":
				pages.splice(1, 0, "...");
				break;
			default:
				pages.splice(1, 0, "...");
				pages.splice(array.length - 1, 0, "...");
				break;
		}
		return array;
	};

	// This sets up which page numbers are going to be rendered
	let pages = [];
	addNumberedPages(pages);
	if (totalPages > 5) addEllipses(pages);

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
					<li
						key={page.pageNumber}
						// className={
						// 	currentPage == page.pageNumber
						// 		? "pagination__page pagination__page__current"
						// 		: "pagination__page"
						// }

						className={`pagination__page ${
							currentPage == page.pageNumber ? "pagination__page__current" : ""
						} ${page.pageNumber == "..." ? "no-flex" : ""}`}

						// className={`pagination__page  ${currentPage == page.pageNumber &&
						// 	"pagination__page__current"}`}
					>
						{currentPage == page.pageNumber || page.pageNumber == "..." ? (
							<span>{page.pageNumber}</span>
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
