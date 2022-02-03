import React from "react";

import { ColumnList } from "@nice-digital/nds-column-list";

const ListItems = () => (
	<>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
		<li>Four</li>
		<li>Five</li>
		<li>Six</li>
	</>
);

export const AToZList = props => {
	return (
		<ColumnList>
			<ListItems />
		</ColumnList>
	);
};
