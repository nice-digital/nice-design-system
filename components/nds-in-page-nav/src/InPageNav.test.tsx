import React from "react";
import { render } from "@testing-library/react";

import { InPageNav } from "./InPageNav";

describe("InPageNav", () => {
	it("should match snapshot", () => {
		const main = document.createElement("main");
		document.body.appendChild(main);

		const h2 = document.createElement("h2");
		h2.textContent = "A heading 2";
		main.appendChild(h2);

		const h3 = document.createElement("h3");
		h3.textContent = "A heading 3";
		main.appendChild(h3);

		const inPageNavContainer = document.createElement("div");
		document.body.appendChild(inPageNavContainer);

		const wrapper = render(<InPageNav data-track={false} />, {
			container: inPageNavContainer
		});
		expect(wrapper).toMatchSnapshot();
	});
});
