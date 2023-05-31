import { ColumnList } from "@nice-digital/nds-column-list";

export const DefaultColumnList = () => (
	<ColumnList>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
		<li>Four</li>
		<li>Five</li>
		<li>Six</li>
	</ColumnList>
);

export const TwoColumnColumnList = () => (
	<ColumnList columns={2}>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
		<li>Four</li>
		<li>Five</li>
		<li>Six</li>
	</ColumnList>
);

export const PlainColumnList = () => (
	<ColumnList plain>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
		<li>Four</li>
		<li>Five</li>
		<li>Six</li>
	</ColumnList>
);
