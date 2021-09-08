import React from "react";
import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

const aFunction = () => console.log("HI!");

const totalPages = 49;

const generatePagesActions = (maxDestinations: number) => {
	let destinations = [];
	for (let i = 0; i < maxDestinations; i++) {
		destinations.push({
			pageNumber: i,
			destination: `#${i}`,
			onClick: aFunction
		});
	}
	return destinations;
};

// example where you get a wierd middle object like from search endpoint
const partialPagesActions = [
	{
		pageNumber: 1,
		destination: "#1",
		onClick: aFunction
	},
	{
		pageNumber: 30,
		destination: "#30",
		onClick: aFunction
	},
	{
		pageNumber: 31,
		destination: "#31",
		onClick: aFunction
	},
	{
		pageNumber: 32,
		destination: "#32",
		onClick: aFunction
	},
	{
		pageNumber: 33,
		destination: "#33",
		onClick: aFunction
	},
	{
		pageNumber: 34,
		destination: "#34",
		onClick: aFunction
	},
	{
		pageNumber: 49,
		destination: "#49",
		onClick: aFunction
	}
];

const pagesActions = generatePagesActions(totalPages);

const elementType = "a";
const method = "aMethod";

const nextPageAction = {
	destination: "#somewhere",
	onClick: aFunction
};

const previousPageAction = {
	destination: "#somewhereElse",
	onClick: aFunction
};

export const EnhancedPaginationView = () => {
	return (
		<>
			<EnhancedPagination
				currentPage={32}
				elementType={elementType}
				method={method}
				pagesActions={partialPagesActions}
				nextPageAction={nextPageAction}
				previousPageAction={previousPageAction}
				totalPages={totalPages}
			/>
		</>
	);
};
