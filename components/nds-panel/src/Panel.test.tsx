import React from "react";
import { render } from "@testing-library/react";

import { Panel } from "../src/Panel";

describe("Panel", () => {
	it("should match snapshot for default panel", () => {
		const wrapper = render(<Panel>Some panel content</Panel>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should use correct CSS class modifier for impact panel", () => {
		const { container } = render(
			<Panel variant="impact">Some panel content</Panel>
		);
		const panel = container.querySelector(".panel");
		expect(panel).toHaveClass("panel panel--impact");
	});

	it("should use correct CSS class modifier for primary panel", () => {
		const { container } = render(
			<Panel variant="primary">Some panel content</Panel>
		);
		const panel = container.querySelector(".panel");
		expect(panel).toHaveClass("panel panel--primary");
	});

	it("should append given className prop to rendered classes", () => {
		const { container } = render(
			<Panel variant="primary" className="mt--0">
				Some panel content
			</Panel>
		);
		const panel = container.querySelector(".panel");
		expect(panel).toHaveClass("panel panel--primary mt--0");
	});

	it("should pass arbitrary prop into panel div", () => {
		const { container } = render(
			<Panel data-something="test">Some panel content</Panel>
		);
		const panel = container.querySelector(".panel");
		expect(panel?.getAttribute("data-something")).toBe("test");
	});
});
