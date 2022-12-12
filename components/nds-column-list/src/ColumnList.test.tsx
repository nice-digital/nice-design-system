import React from "react";
import { render } from "@testing-library/react";
import { ColumnList } from "./ColumnList";

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

describe("ColumnList", () => {
	it("should match snapshot", () => {
		const wrapper = render(
			<ColumnList>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should add CSS module class name to parent list for standard (boxed) variant", () => {
		const wrapper = render(
			<ColumnList>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.getByRole("list")).toHaveClass("column-list--boxed");
	});

	it("should add CSS module class name to parent list for the plain variant", () => {
		const wrapper = render(
			<ColumnList plain>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.getByRole("list")).toHaveClass("column-list--plain");
	});

	it("should add CSS module class name to parent list for the 2 column variant", () => {
		const wrapper = render(
			<ColumnList columns={2}>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.getByRole("list")).toHaveClass("column-list--two-columns");
	});

	it("should add no CSS module class name to parent list for the 3 column variant", () => {
		const wrapper = render(
			<ColumnList columns={3}>
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.getByRole("list")).not.toHaveClass(
			"column-list--two-columns"
		);
	});

	it("should append className prop to rendered class attribute", () => {
		const wrapper = render(
			<ColumnList className="test">
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.getByRole("list")).toHaveClass("test");
	});

	it("should render additional props as attributes", () => {
		const wrapper = render(
			<ColumnList aria-label="hello">
				<ListItems />
			</ColumnList>
		);
		expect(wrapper.getByRole("list").getAttribute("aria-label")).toBe("hello");
	});
});
