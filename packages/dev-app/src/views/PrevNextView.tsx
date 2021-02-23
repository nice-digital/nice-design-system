import React from "react";
import { Link } from "react-router-dom";
import { PrevNext } from "@nice-digital/nds-prev-next";

export const PrevNextView = () => {
	return (
		<>
			<h1>Prev Next</h1>
			<PrevNext
				nextPageLink={{
					text: "Page Header",
					destination: "/pageheader",
					elementType: Link,
					intro: "Show me the next one"
				}}
				previousPageLink={{
					text: "Alert",
					destination: "/alert",
					elementType: Link
				}}
			/>
			<hr />
			<PrevNext
				nextPageLink={{
					text: "Page Header",
					destination: "/pageheader",
					elementType: Link,
					intro: "Show me the next one"
				}}
				previousPageLink={{
					destination: "/alert",
					elementType: Link
				}}
			/>
		</>
	);
};
