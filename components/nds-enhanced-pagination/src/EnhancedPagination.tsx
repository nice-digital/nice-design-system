import React from "react";
import classnames from "classnames";
import "./../scss/enhanced-pagination.scss";

export interface EnhancedPaginationProps {
	[prop: string]: unknown;
	currentPage: number;
	totalPages: number;
	mapPageNumberToHref: (pageNumber: number) => string;
	elementType?: React.ElementType;
	method?: string;
	className?: string;
}

export const EnhancedPagination: React.FC<EnhancedPaginationProps> = ({
	currentPage,
	totalPages,
	mapPageNumberToHref,
	elementType: ElementType = "a",
	method = "href",
	className,
	...rest
}: EnhancedPaginationProps) => {
	const calculatePosition = (currentPage: number) => {
		if (currentPage <= 4) return "early";
		if (totalPages - currentPage <= 3) return "late";
		return "middle";
	};

	const addNumberedPages = (array: (number | null)[]) => {
		array.push(1);
		if (totalPages && totalPages !== 1) array.push(totalPages);
		switch (calculatePosition(currentPage)) {
			case "early":
				if (totalPages < 7) {
					for (let i = 2; i < totalPages; i++) {
						array.splice(array.length - 1, 0, i);
					}
				} else {
					for (let i = 2; i <= currentPage + 2; i++) {
						array.splice(array.length - 1, 0, i);
					}
				}
				break;
			case "late":
				for (let i = currentPage - 2; i < totalPages; i++) {
					array.splice(array.length - 1, 0, i);
				}
				break;
			default:
				array.splice(
					1,
					0,
					currentPage - 2,
					currentPage - 1,
					currentPage,
					currentPage + 1,
					currentPage + 2
				);
		}
	};

	const addEllipses = (array: (number | null)[]) => {
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
	let pages: (number | null)[] = [];
	addNumberedPages(pages);
	if (totalPages >= 7) addEllipses(pages);

	return (
		<nav
			role="navigation"
			aria-label="Pagination"
			className={classnames("pagination ", className)}
			data-component="pagination"
			{...rest}
		>
			<ol className="pagination__list">
				{currentPage != 1 && (
					<li className="pagination__item pagination__item--bookend">
						<ElementType
							className="pagination__link"
							{...{ [method]: mapPageNumberToHref(currentPage - 1) }}
						>
							Previous page
						</ElementType>
					</li>
				)}
				{pages.map((pageNumber, index) => (
					<li
						key={index}
						className={classnames("pagination__item", {
							"pagination__item--current": pageNumber == currentPage
						})}
						{...(pageNumber === currentPage && { "aria-current": "true" })}
					>
						{currentPage == pageNumber || pageNumber == null ? (
							<span className="pagination__inactive">
								{currentPage == pageNumber && (
									<span className="visually-hidden">Current page </span>
								)}
								{pageNumber || <>&hellip;</>}
							</span>
						) : (
							<ElementType
								aria-label={`Go to page ${pageNumber}`}
								className="pagination__link"
								{...{ [method]: mapPageNumberToHref(pageNumber) }}
							>
								{pageNumber}
							</ElementType>
						)}
					</li>
				))}
				<li className="pagination__item pagination__item--count">
					<span>
						Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
					</span>
				</li>
				{currentPage != totalPages && (
					<li className="pagination__item pagination__item--bookend">
						<ElementType
							className="pagination__link"
							{...{ [method]: mapPageNumberToHref(currentPage + 1) }}
						>
							Next page
						</ElementType>
					</li>
				)}
			</ol>
		</nav>
	);
};
