import React from "react";
import { render } from "@testing-library/react";

import { PhaseBanner } from "./PhaseBanner";

describe("Phase Banner", () => {
	it("should match the default snapshot", () => {
		const wrapper = render(<PhaseBanner alpha>Some content</PhaseBanner>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should merge additional classes", () => {
		const { container } = render(
			<PhaseBanner alpha className="mt--0">
				Some content
			</PhaseBanner>
		);

		const paragraph = container.querySelector("p");
		expect(paragraph).toHaveClass("mt--0");
		expect(paragraph).toHaveClass("phase-banner");
	});

	it("should pass additional props down to the container", () => {
		const { container } = render(
			<PhaseBanner alpha data-track="false">
				Some content
			</PhaseBanner>
		);

		const paragraph = container.querySelector("p");
		expect(paragraph?.getAttribute("data-track")).toBe("false");
	});
});
