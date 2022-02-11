import React from "react";
import { AZList } from "@nice-digital/nds-a-z-list";

export const AZListView = () => {
	return (
		<>
			<h2>Standard</h2>
			<AZList>
				<li>Item one</li>
				<li>Item two</li>
				<li>Item three</li>
				<li>Item four</li>
				<li>Item five</li>
				<li>Item six</li>
			</AZList>
		</>
	);
};
