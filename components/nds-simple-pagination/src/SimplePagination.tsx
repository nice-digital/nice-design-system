import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./../scss/simple-pagination.scss";

interface PageLinkProps {
	destination?: string;
	elementType?: React.ElementType;
	method?: string;
	text?: string;
}

export interface SimplePaginationProps {
	[prop: string]: unknown;
	currentPage?: number;
	totalPages?: number;
	nextPageLink?: PageLinkProps;
	previousPageLink?: PageLinkProps;
	className?: string;
}

const Link: React.FC<PageLinkProps> = ({
	text,
	destination,
	elementType: ElementType = "a",
	method
}: PageLinkProps) => {
	let linkProps = {
		className: "simple-pagination__link",
		[method || (ElementType === "a" && "href") || "to"]: destination
	};

	return (
		<span className="simple-pagination__link-wrapper">
			<ElementType {...linkProps}>{text}</ElementType>{" "}
		</span>
	);
};

export const SimplePagination: React.FC<SimplePaginationProps> = (
	props: SimplePaginationProps
) => {
	const {
		currentPage,
		totalPages,
		nextPageLink,
		previousPageLink,
		className,
		...rest
	} = props;

	const nextLinkProps = {
		text: "Next page",
		destination: nextPageLink && nextPageLink.destination,
		elementType: nextPageLink && nextPageLink.elementType,
		method: nextPageLink && nextPageLink.method
	};

	const previousLinkProps = {
		text: "Previous page",
		destination: previousPageLink && previousPageLink.destination,
		elementType: previousPageLink && previousPageLink.elementType,
		method: previousPageLink && previousPageLink.method
	};

	return (
		<div className={classnames("simple-pagination", className)} {...rest}>
			{currentPage && (
				<p>
					Page <b>{currentPage}</b>
					{totalPages && (
						<>
							{" "}
							of <b>{totalPages}</b>
						</>
					)}
				</p>
			)}
			{(nextPageLink || previousPageLink) && (
				<nav aria-label="Pagination">
					{nextPageLink && <Link {...nextLinkProps} />}
					{previousPageLink && <Link {...previousLinkProps} />}
				</nav>
			)}
		</div>
	);
};
