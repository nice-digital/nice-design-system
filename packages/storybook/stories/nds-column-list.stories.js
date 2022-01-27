import React from "react";

import { storiesOf } from "@storybook/react";

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

storiesOf("Components/Column List", module)
	.add("Default (boxed, 3 columns)", () => (
		<ColumnList>
			<ListItems />
		</ColumnList>
	))
	.add("Plain, 2 columns", () => (
		<ColumnList plain columns={2}>
			<ListItems />
		</ColumnList>
	));
