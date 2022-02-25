"use strict";

import React from "react";
import { shallow } from "enzyme";
import { Alphabet, Letter } from "../Alphabet";

describe("Alphabet", () => {
	const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
	const letterElements = allLetters.map(letter => (
		<Letter key={letter} to={`#${letter}`} label={`Letter ${letter}`}>
			{letter.toUpperCase()}
		</Letter>
	));

	it("should render without crashing", () => {
		const wrapper = shallow(<Alphabet>{letterElements}</Alphabet>);
		expect(wrapper).toHaveLength(1);
	});

	it("should add a class of 'alphabet' to the default variant", () => {
		const wrapper = shallow(<Alphabet>{letterElements}</Alphabet>);
		expect(wrapper.hasClass("alphabet")).toEqual(true);
	});

	it("should add a class of 'alphabet--chunky' to the chunky variant", () => {
		const wrapper = shallow(<Alphabet chunky>{letterElements}</Alphabet>);
		expect(wrapper.hasClass("alphabet--chunky")).toEqual(true);
	});

	it("should render a child component for each letter of the alphabet", () => {
		const wrapper = shallow(<Alphabet>{letterElements}</Alphabet>);
		expect(wrapper.children()).toHaveLength(allLetters.length);
	});

	it("should render chunky child components when the chunky variant is specified on the parent", () => {
		const wrapper = shallow(<Alphabet chunky>{letterElements}</Alphabet>);
		expect(
			wrapper
				.childAt(0)
				.render() //  Used here due to this issue: https://github.com/enzymejs/enzyme/issues/1177#issuecomment-332717606
				.hasClass("alphabet__letter alphabet__letter--chunky")
		).toEqual(true);
	});

	it("should append className prop to rendered class attribute", () => {
		const wrapper = shallow(
			<Alphabet className="test">{letterElements}</Alphabet>
		);
		expect(wrapper.hasClass("test")).toEqual(true);
	});

	it("should render additional props as attributes", () => {
		const wrapper = shallow(
			<Alphabet aria-label="hello">{letterElements}</Alphabet>
		);
		expect(wrapper.prop("aria-label")).toEqual("hello");
	});
});
