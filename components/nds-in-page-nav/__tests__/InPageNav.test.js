import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { InPageNav } from "../src/InPageNav";

describe("InPageNav", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<InPageNav />);
		expect(wrapper).toHaveLength(1);
	});

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

		const wrapper = mount(<InPageNav data-track={false} />, {
			attachTo: inPageNavContainer
		});
		wrapper.update();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
