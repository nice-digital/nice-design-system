import React from "react";
import { render } from "@testing-library/react";
import { Table } from "./Table";

describe("Table", () => {
	it("should match the snapshot", () => {
		const wrapper = render(
			<Table>
				<tr>
					<td>One</td>
				</tr>
			</Table>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should merge container classes when additional className supplied", () => {
		const wrapper = render(
			<Table className="mt--d">
				<tr>
					<td>One</td>
				</tr>
			</Table>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should cascade additional attributes to the container", () => {
		const wrapper = render(
			<Table aria-label="Table showing increased usage of the design system over time">
				<tr>
					<td>One</td>
				</tr>
			</Table>
		);

		expect(wrapper.getByRole("table").getAttribute("aria-label")).toBe(
			"Table showing increased usage of the design system over time"
		);
	});
});
