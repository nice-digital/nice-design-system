"use strict";
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Table } from "../src/Table";

describe("Table", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(
			<Table>
				<tr>
					<td>One</td>
				</tr>
			</Table>
		);
		expect(wrapper).toHaveLength(1);
	});

	it("should match the snapshot", () => {
		const wrapper = shallow(
			<Table striped bordered>
				<tr>
					<td>One</td>
				</tr>
			</Table>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should merge container classes when additional className supplied", () => {
		const wrapper = shallow(
			<Table className="mt--d">
				<tr>
					<td>One</td>
				</tr>
			</Table>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should cascade additional attributes to the container", () => {
		const wrapper = shallow(
			<Table aria-label="Table showing increased usage of the design system over time">
				<tr>
					<td>One</td>
				</tr>
			</Table>
		);
		expect(wrapper.props()["aria-label"]).toEqual(
			"Table showing increased usage of the design system over time"
		);
	});
});
