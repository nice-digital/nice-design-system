import React from "react";
import { SimplePagination } from "@nice-digital/nds-simple-pagination";
import { Link } from "react-router-dom";
import { Panel } from "@nice-digital/nds-panel";
// import d from "./../data/search-response.json";

import test from "../data/demo-data.json";

function handleClick(action: string) {
	alert("clicked! " + action);
}

const MyCustomHandler = () => {
	return <button onClick={e => handleClick("next")}>Next</button>;
};

export const SimplePaginationView = () => {
	const props = {
		currentPage: 1,
		totalPages: 3,
		nextPageLink: {
			elementType: MyCustomHandler,
			destination: "#test"
		},
		previousPageLink: {
			destination: "#hello"
		}
	};

	return (
		<>
			<Panel variant="impact">
				<p>testing</p>
			</Panel>
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
