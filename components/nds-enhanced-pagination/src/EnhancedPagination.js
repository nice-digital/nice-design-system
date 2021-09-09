import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./../scss/enhanced-pagination.scss";

export const EnhancedPagination = ({
	currentPage,
	totalPages,
	pagesActions,
	nextPageAction,
	previousPageAction,
	elementType = "a",
	method = "href",
	className
}) => {
	const ElementType = elementType;
	const action = ElementType === "button" ? "onClick" : method;

	const previousPageProps = {
		[action]:
			ElementType === "button"
				? previousPageAction.onClick
				: previousPageAction.destination
	};

	const nextPageProps = {
		[action]:
			ElementType === "button"
				? nextPageAction.onClick
				: nextPageAction.destination
	};

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

	// We then map the pagesActions to the pages we want to render
	const pagesToRender = [];
	pages.map((page, index) =>
		pagesToRender.push({
			pageNumber: page,
			id: page !== "..." ? page : `${page}-${index}`,
			pageProp: pagesActions.find(p => p.pageNumber === page)
				? {
						"aria-label": `Go to page ${page}`,
						[action]:
							(action == "onClick" &&
								pagesActions.find(p => p.pageNumber === page)?.onClick) ||
							pagesActions.find(p => p.pageNumber === page)?.destination
				  }
				: {
						id: "page-object-missing"
				  }
		})
	);

	return (
		<nav
			role="navigation"
			aria-label="Pagination Navigation"
			className={classnames(
				"pagination clearfix mt--a mb--e mr--b mb--b ml--b",
				className
			)}
		>
			<ul className="pagination__list">
				{currentPage != 1 && (
					<li className="pagination__page" aria-label="Go to previous page">
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
						key={page.id}
						className={classnames("pagination__page", {
							pagination__page__current: page.pageNumber == currentPage,
							"pagination__page__no-flex": page.pageNumber == "..."
						})}
					>
						{currentPage == page.pageNumber || page.pageNumber == "..." ? (
							<span>
								{currentPage == page.pageNumber && (
									<span className="visually-hidden">Current page </span>
								)}
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
					<li className="pagination__page" aria-label="Go to next page">
						<ElementType {...nextPageProps} className="pagination__page-link">
							Next page
						</ElementType>
					</li>
				)}
			</ul>
		</nav>
	);
};

const ActionsType = PropTypes.shape({
	destination: PropTypes.string,
	onClick: PropTypes.func,
	pageNumber: PropTypes.number
});

EnhancedPagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	pagesActions: PropTypes.arrayOf(PropTypes.ActionsType).isRequired,
	nextPageAction: PropTypes.arrayOf(PropTypes.ActionsType).isRequired,
	previousPageAction: PropTypes.arrayOf(PropTypes.ActionsType).isRequired,
	totalPages: PropTypes.number.isRequired,
	elementType: PropTypes.elementType,
	method: PropTypes.string,
	className: PropTypes.string
};
