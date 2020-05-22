import React from "react";
import { SimplePagination } from "@nice-digital/nds-simple-pagination";
// import d from "./../data/search-response.json";

import test from "../data/demo-data.json";

export const SimplePaginationView = () => {
	const handleChange = (action: string) => {
		console.log(action);
	};

	const props = {
		// @ts-ignore
		previousPageLink: "#back",
		nextPageLink: "#forward",
		handlePageEvent: handleChange,
		currentPage: 1,
		totalPages: 3
	};

	return (
		<>
			<h1>Simple pagination</h1>
			<ul className="list">
				{test.map(item => (
					<li key={item._id}>{item.name}</li>
				))}
			</ul>
			<SimplePagination {...props} />
		</>
	);
};
