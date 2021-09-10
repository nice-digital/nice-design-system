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
				pages.splice(array.length - 1, 0, null);
				break;
			case "late":
				pages.splice(1, 0, null);
				break;
			default:
				pages.splice(1, 0, null);
				pages.splice(array.length - 1, 0, null);
				break;
		}
		return array;
	};

	// This sets up which page numbers are going to be rendered
	let pages = [];
	addNumberedPages(pages);
	if (totalPages > 5) addEllipses(pages);

	// We then map the pagesActions to the pages we want to render
	const itemsToRender = [];
	pages.map((page, index) =>
		itemsToRender.push({
			pageNumber: page,
			id: page !== null ? page : `${page}-${index}`,
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
			className={classnames("pagination clearfix ", className)}
		>
			<ul className="pagination__list">
				{currentPage != 1 && (
					<li className="pagination__item" aria-label="Go to previous page">
						<ElementType {...previousPageProps} className="pagination__link">
							Previous page
						</ElementType>
					</li>
				)}
				{itemsToRender.map(item => (
					<li
						key={item.id}
						className={classnames("pagination__item", {
							"pagination__item--current": item.pageNumber == currentPage,
							"pagination__item--spacer": item.pageNumber == null
						})}
					>
						{currentPage == item.pageNumber || item.pageNumber == null ? (
							<span>
								{currentPage == item.pageNumber && (
									<span className="visually-hidden">Current page </span>
								)}
								{/* TODO: what's the a11y around ellipsis */}
								{item.pageNumber || <span>&hellip;</span>}
							</span>
						) : (
							<ElementType {...item.pageProp} className="pagination__link">
								{item.pageNumber}
							</ElementType>
						)}
					</li>
				))}
				{currentPage != totalPages && (
					<li className="pagination__item" aria-label="Go to next page">
						<ElementType {...nextPageProps} className="pagination__link">
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
