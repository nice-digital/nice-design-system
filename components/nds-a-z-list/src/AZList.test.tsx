import React from "react";
import { render } from "@testing-library/react";

import { AZList } from "./AZList";

describe("A-Z List", () => {
	const AZListItems = () => (
		<>
			<li>Item one</li>
			<li>Item two</li>
		</>
	);
	const mockAlphabet = () => (
		<ol data-testid="mock-alphabet">
			<li>
				<a href="#a">A</a>
			</li>
			<li>
				<a href="#b">B</a>
			</li>
		</ol>
	);

	const azListClass = "a-z-list";

	it("should match snapshot with default attributes", () => {
		const wrapper = render(
			<AZList alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot with custom attributes", () => {
		const wrapper = render(
			<AZList
				className="test-class"
				aria-label="test-label"
				alphabet={mockAlphabet}
			>
				<AZListItems />
			</AZList>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should render an ordered list component", () => {
		const wrapper = render(
			<AZList alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);

		const lists = wrapper.getAllByRole("list");
		const azList = lists.find((l) => l.classList.contains(azListClass));

		expect(azList).toBeInTheDocument();
	});

	it("should append className prop to rendered class attribute for the list", () => {
		const wrapper = render(
			<AZList className="test" alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);

		const lists = wrapper.getAllByRole("list");
		const azList = lists.find((l) => l.classList.contains(azListClass));

		expect(azList).toHaveClass("test");
	});

	it("should render additional props as attributes for the list", () => {
		const wrapper = render(
			<AZList aria-label="test" alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);

		const lists = wrapper.getAllByRole("list");
		const azList = lists.find((l) => l.classList.contains(azListClass));

		expect(azList?.getAttribute("aria-label")).toBe("test");
	});

	it("should render an alphabet component that has been passed in", () => {
		const wrapper = render(
			<AZList alphabet={mockAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(wrapper.getByTestId("mock-alphabet")).toBeInTheDocument();
	});

	it("should render an alphabet component with a custom class", () => {
		const customAlphabet = () => <div className="test-class">Alphabet</div>;
		const { container } = render(
			<AZList alphabet={customAlphabet}>
				<AZListItems />
			</AZList>
		);
		expect(container.querySelector(".test-class")).toBeInTheDocument();
	});
});
