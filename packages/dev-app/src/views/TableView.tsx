import React from "react";
import { Table } from "@nice-digital/nds-table";

export const TableView = () => {
	return (
		<>
			<h1>Tables</h1>
			<h2>Table basics</h2>
			<p>A well-formed, 'proper' table</p>
			<Table>
				<thead>
					<tr>
						<th scope="col">Header One</th>
						<th scope="col">
							Vertical
							<br />
							Alignment
						</th>
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
					<tr>
						<td>Data</td>
						<td>Data</td>
					</tr>
					<tr>
						<td>Data</td>
						<td>Data</td>
					</tr>
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
			<h2>With row headings</h2>
			<p>A well-formed, 'proper' table</p>
			<Table>
				<thead>
					<tr>
						<th scope="col">Header One</th>
						<th scope="col">Header Two</th>
						<th scope="col">Header Three</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Row heading</th>
						<td>
							Data
							<br />
							data
						</td>
						<td>Data</td>
					</tr>
					<tr>
						<th scope="row">Row heading</th>
						<td>Data</td>
						<td>Data</td>
					</tr>
					<tr>
						<th scope="row">Row heading</th>
						<td>Data</td>
						<td>Data</td>
					</tr>
					<tr>
						<th scope="row">Row heading</th>
						<td>Data</td>
						<td>Data</td>
					</tr>
				</tbody>
			</Table>
			<h2>Without thead and tbody</h2>
			<p>
				We shouldn't mark tables up like this (without thead and tbody) but just
				in case...
			</p>
			<Table>
				<tr>
					<th>Header One</th>
					<th>Header Two</th>
					<th>Header Three</th>
					<th>Header Four</th>
					<th>Header Five</th>
				</tr>
				<tr>
					<td>Datadata</td>
					<td>Datadata</td>
					<td>Datadata</td>
					<td>Datadata</td>
					<td>Datadata</td>
				</tr>
				<tr>
					<td>Datadata</td>
					<td>Datadata</td>
					<td>Datadata</td>
					<td>Datadata</td>
					<td>Datadata</td>
				</tr>
			</Table>
			<h2>Horizontal scrolling</h2>
			<div style={{ width: "200px", background: "red", padding: "1rem" }}>
				<Table>
					<thead>
						<tr>
							<th>Header One</th>
							<th>Header Two</th>
							<th>Header Three</th>
							<th>Header Four</th>
							<th>Header Five</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Datadata</td>
							<td>Datadata</td>
							<td>Datadata</td>
							<td>Datadata</td>
							<td>Datadata</td>
						</tr>
						<tr>
							<td>Datadata</td>
							<td>Datadata</td>
							<td>Datadata</td>
							<td>Datadata</td>
							<td>Datadata</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
};
