import React from "react";
import { render } from "@testing-library/react";
import { MaintainRatio, ratios } from "./MaintainRatio";

describe("nds-maintain-ratio", () => {
	it("should match the snapshot with no options", () => {
		const wrapper = render(
			<MaintainRatio>
				<p>Test</p>
			</MaintainRatio>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass down classname and extra props", () => {
		const { container } = render(
			<MaintainRatio className="testing" data-test="yes">
				<p>Test</p>
			</MaintainRatio>
		);
		const ratioDiv = container.querySelector(".testing");
		expect(ratioDiv).toBeInTheDocument();
		expect(ratioDiv?.getAttribute("data-test")).toBe("yes");
	});

	Object.keys(ratios).forEach((ratio) => {
		it(`should apply the class for the ratio: ${ratio}`, () => {
			const { container } = render(
				<MaintainRatio ratio={ratio as keyof typeof ratios}>
					<p>Test</p>
				</MaintainRatio>
			);
			if (ratio === "1:1") {
				expect(
					container.querySelector(".maintain-ratio--square")
				).toBeInTheDocument();
			} else {
				expect(
					container.querySelector(`.maintain-ratio--${ratio.replace(":", "-")}`)
				).toBeInTheDocument();
			}
		});
	});
});
