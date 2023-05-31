import { Table } from "@nice-digital/nds-table";

export const DefaultTable = () => (
	<Table>
		<tr>
			<th>Ref</th>
			<th>Title</th>
			<th>Date</th>
		</tr>
		<tr>
			<td>ABC1</td>
			<td>Lorem ipsum dolor sit amet</td>
			<td>27/08/2022</td>
		</tr>
		<tr>
			<td>XYZ2</td>
			<td>Aliquam consectetur posuere nibh dapibus consequat</td>
			<td>25/12/2023</td>
		</tr>
	</Table>
);

export const CaptionedTable = () => (
	<Table>
		<caption>Here is a caption!</caption>
		<tr>
			<th>Ref</th>
			<th>Title</th>
			<th>Date</th>
		</tr>
		<tr>
			<td>ABC1</td>
			<td>Lorem ipsum dolor sit amet</td>
			<td>27/08/2022</td>
		</tr>
		<tr>
			<td>XYZ2</td>
			<td>Aliquam consectetur posuere nibh dapibus consequat</td>
			<td>25/12/2023</td>
		</tr>
	</Table>
);
