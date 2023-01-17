import React from "react";
import { render } from "@testing-library/react";
import { FullBleed } from "./FullBleed";

describe("FullBleed component", () => {
	it("should match the snapshot with no options", () => {
		const wrapper = render(
			<FullBleed>
				<p>content</p>
			</FullBleed>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match the snapshot with all options", () => {
		const wrapper = render(
			<FullBleed
				className="monkey"
				padding="large"
				light={true}
				backgroundImage="image.jpg"
			>
				<p>content</p>
			</FullBleed>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should spread additional props onto the container", () => {
		const { container } = render(
			<FullBleed
				className="monkey"
				padding="large"
				light={true}
				backgroundImage="image.jpg"
				data-track={false}
			>
				<p>content</p>
			</FullBleed>
		);
		expect(
			container.querySelector("div.full-bleed")?.getAttribute("data-track")
		).toBe("false");
	});
});
