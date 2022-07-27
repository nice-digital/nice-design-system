import React from "react";
import { ColumnList } from "@nice-digital/nds-column-list";

export const ColumnListView = () => {
	return (
		<>
			<h2>Standard (boxed, 3 columns)</h2>
			<ColumnList>
				<li>Item one</li>
				<li>Item two</li>
				<li>Item three</li>
				<li>Item four</li>
				<li>Item five</li>
				<li>Item six</li>
			</ColumnList>
			<h2>Variant (plain, 2 columns)</h2>
			<ColumnList plain columns={2}>
				<li>
					<a href="#">
						Item one really really really really really really really really
						really really really really really really long so it wraps
					</a>
				</li>
				<li>
					<a href="#">Item two</a>
				</li>
				<li>
					<a href="#">Item three</a>
				</li>
				<li>Item four</li>
				<li>Item five</li>
				<li>Item six</li>
			</ColumnList>
			<h2>Variant (2 columns, anchors)</h2>
			<ColumnList columns={2}>
				<li>
					<a href="#">Item one</a>
				</li>
				<li>
					<a href="#">Item two</a>
				</li>
				<li>
					<a href="#">Item three</a>
				</li>
				<li>
					<a href="#">Item four</a>
				</li>
				<li>
					<a href="#">Item five</a>
				</li>
				<li>
					<a href="#">Item six</a>
				</li>
			</ColumnList>
		</>
	);
};
