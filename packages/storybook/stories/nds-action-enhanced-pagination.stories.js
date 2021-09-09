import React from "react";

import { storiesOf } from "@storybook/react";

import { EnhancedPagination } from "@nice-digital/nds-enhanced-pagination";

const generatePagesActions = maxDestinations => {
	let destinations = [];
	for (let i = 0; i <= maxDestinations; i++) {
		destinations.push({
			pageNumber: i,
			destination: `#${i}`
		});
	}
	return destinations;
};

const method = "aMethod";

const nextPageAction = {
	destination: "#somewhere"
};

const previousPageAction = {
	destination: "#somewhereElse"
};

storiesOf("Components/Enhanced pagination", module)
	.add("First page, up to 5 pages", () => {
		return (
			<EnhancedPagination
				currentPage={1}
				method={method}
				pagesActions={generatePagesActions(4)}
				nextPageAction={nextPageAction}
				previousPageAction={previousPageAction}
				totalPages={4}
			/>
		);
	})
	.add("Second page, up to 5 pages", () => {
		return (
			<EnhancedPagination
				currentPage={2}
				method={method}
				pagesActions={generatePagesActions(4)}
				nextPageAction={nextPageAction}
				previousPageAction={previousPageAction}
				totalPages={4}
			/>
		);
	})
	.add("Last page, up to 5 pages", () => {
		return (
			<EnhancedPagination
				currentPage={4}
				method={method}
				pagesActions={generatePagesActions(4)}
				nextPageAction={nextPageAction}
				previousPageAction={previousPageAction}
				totalPages={4}
			/>
		);
	})
	.add("First page, more than 5 pages", () => {
		return (
			<EnhancedPagination
				currentPage={1}
				method={method}
				pagesActions={generatePagesActions(8)}
				nextPageAction={nextPageAction}
				previousPageAction={previousPageAction}
				totalPages={8}
			/>
		);
	})
	.add("Middle page, more than 5 pages", () => {
		return (
			<EnhancedPagination
				currentPage={4}
				method={method}
				pagesActions={generatePagesActions(8)}
				nextPageAction={nextPageAction}
				previousPageAction={previousPageAction}
				totalPages={8}
			/>
		);
	})
	.add("Last page, more than 5 pages", () => {
		return (
			<EnhancedPagination
				currentPage={8}
				method={method}
				pagesActions={generatePagesActions(8)}
				nextPageAction={nextPageAction}
				previousPageAction={previousPageAction}
				totalPages={8}
			/>
		);
	});
