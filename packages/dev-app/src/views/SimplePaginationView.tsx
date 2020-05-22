import React from "react";
import { SimplePagination } from "@nice-digital/nds-simple-pagination";
import d from "./../data/search-response.json";

export const SimplePaginationView = () => {
	const { Next, Previous } = d.PagerLinks;
	console.log(d);

	const handleChange = (action: string) => {
		console.log(action);
	};

	const props = {
		// @ts-ignore
		previousPageLink: (Previous && Previous.fullUrl) || "#back",
		nextPageLink: Next && Next.fullUrl,
		handlePageEvent: handleChange,
		currentPage: 1,
		totalPages: 3,
		nextAriaLabel: "Go to the next page of results",
		previousAriaLabel: "Go to the previous page of results"
	};

	return (
		<>
			<h1>Simple pagination</h1>

			<SimplePagination {...props}>
				<ul>
					{d.Documents.map(item => (
						<li key={item.Id}>{item.Title}</li>
					))}
				</ul>
			</SimplePagination>
		</>
	);
};
