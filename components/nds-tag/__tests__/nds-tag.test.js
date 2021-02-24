import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Tag } from "../src/Tag";

describe("Tag", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<Tag>tag content</Tag>);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot for default tag", () => {
		const wrapper = shallow(<Tag>tag content 2</Tag>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should match snapshot for a supplied type", () => {
		const wrapper = shallow(<Tag alpha>tag content 3</Tag>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should cascade any additional attributes to the container", () => {
		const wrapper = shallow(<Tag data-hidden={false}>tag content 4</Tag>);
		expect(wrapper.props()["data-hidden"]).toEqual(false);
	});
});
