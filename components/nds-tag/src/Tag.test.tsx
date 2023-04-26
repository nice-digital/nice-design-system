import React from "react";
import { render } from "@testing-library/react";

import { Tag } from "./Tag";

describe("Tag", () => {
	it("should match snapshot for default tag", () => {
		const wrapper = render(<Tag>tag content 2</Tag>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot for a supplied type", () => {
		const wrapper = render(<Tag alpha>tag content 3</Tag>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should cascade any additional attributes to the container", () => {
		const { container } = render(
			<Tag className="baboon" data-hidden={false}>
				tag content 4
			</Tag>
		);
		expect(
			container.querySelector(".baboon")?.getAttribute("data-hidden")
		).toBe("false");
	});
});
