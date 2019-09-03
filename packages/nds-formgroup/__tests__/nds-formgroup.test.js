"use strict";

import React from "react";
import { shallow, mount } from "enzyme";
import { FormGroup } from "./../src/FormGroup";

describe("FormGroup", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(
			<FormGroup>
				<p>Render</p>
			</FormGroup>
		);
		expect(wrapper).toHaveLength(1);
	});
});
