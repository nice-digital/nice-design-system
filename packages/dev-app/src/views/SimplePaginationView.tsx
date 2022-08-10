import React from "react";
import { SimplePagination } from "@nice-digital/nds-simple-pagination";

import test from "../data/demo-data.json";

function handleClick(action: string) {
	alert("clicked! " + action);
}

const MyCustomHandler = (props: { className?: string }) => {
	return (
		<button onClick={e => handleClick("next")} className={props.className}>
			Next
		</button>
	);
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
			destination: "#hello",
			method: "pigeon"
		}
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
