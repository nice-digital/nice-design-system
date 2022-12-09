import React from "react";
import { render } from "@testing-library/react";
import { Alphabet, Letter } from "./Alphabet";

describe("Alphabet", () => {
	const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
	const letterElements = allLetters.map((letter) => (
		<Letter key={letter} to={`#${letter}`} label={`Letter ${letter}`}>
			{letter.toUpperCase()}
		</Letter>
	));

	it("should match snapshot", () => {
		const wrapper = render(<Alphabet>{letterElements}</Alphabet>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should add a class of 'alphabet' to the default variant", () => {
		const wrapper = render(<Alphabet>{letterElements}</Alphabet>);
		expect(wrapper.getByRole("list")).toHaveClass("alphabet");
	});

	it("should add a custom class when one is specified", () => {
		const wrapper = render(
			<Alphabet className="test-class">{letterElements}</Alphabet>
		);
		expect(wrapper.getByRole("list")).toHaveClass("test-class");
	});

	it("should add a class of 'alphabet--chunky' to the chunky variant", () => {
		const wrapper = render(<Alphabet chunky>{letterElements}</Alphabet>);
		expect(wrapper.getByRole("list")).toHaveClass("alphabet--chunky");
	});

	it("should render a child component for each letter of the alphabet", () => {
		const wrapper = render(<Alphabet>{letterElements}</Alphabet>);
		expect(wrapper.getByRole("list").children.length).toBe(allLetters.length);
	});

	it("should render chunky child components when the chunky variant is specified on the parent", () => {
		const wrapper = render(<Alphabet chunky>{letterElements}</Alphabet>);
		expect(wrapper.getAllByRole("listitem")[0]).toHaveClass(
			"alphabet__letter alphabet__letter--chunky"
		);
	});

	it("should append className prop to rendered class attribute", () => {
		const wrapper = render(
			<Alphabet className="test">{letterElements}</Alphabet>
		);
		expect(wrapper.getByRole("list")).toHaveClass("test");
	});

	it("should render additional props as attributes", () => {
		const wrapper = render(
			<Alphabet aria-label="hello">{letterElements}</Alphabet>
		);
		expect(wrapper.getByRole("list").getAttribute("aria-label")).toBe("hello");
	});
});
