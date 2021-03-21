import React from "react";

import { storiesOf } from "@storybook/react";

import { Table } from "@nice-digital/nds-table";

storiesOf("Foundations/Table", module).add("Default", () => {
	return (
		<Table>
			<thead>
				<tr>
					<th>Header One</th>
					<th>Header Two</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Data</td>
					<td>Data</td>
				</tr>
				<tr>
					<td>Data</td>
					<td>Data</td>
				</tr>
			</tbody>
		</Table>
	);
});
