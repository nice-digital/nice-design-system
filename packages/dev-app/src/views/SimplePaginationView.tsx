import React from "react";
import { SimplePagination } from "@nice-digital/nds-simple-pagination";
import d from "./../data/search-response.json";

export const SimplePaginationView = () => {
	const { ResultCount, FirstResult, LastResult } = d;

	const NextLink = d.PagerLinks.Next.fullUrl;

	return (
		<>
			<h1>Simple pagination</h1>
			<SimplePagination
				resultCount={ResultCount}
				firstResultNumber={FirstResult}
				lastResultNumber={LastResult}
				previousPageLink={PreviousLink}
				nextPageLink={NextLink}
			>
				<ul>
					{d.Documents.map(item => (
						<li key={item.Id}>{item.Title}</li>
					))}
				</ul>
			</SimplePagination>
		</>
	);
};
