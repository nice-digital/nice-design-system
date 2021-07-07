import React from "react";
import { shallow } from "enzyme";
import { FullBleed } from "../src/FullBleed";
import toJson from "enzyme-to-json";

describe("FullBleed component", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<FullBleed />);
		expect(wrapper).toHaveLength(1);
	});
	it("should match the snapshot with no options", () => {
		const wrapper = shallow(
			<FullBleed>
				<p>content</p>
			</FullBleed>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	it("should match the snapshot with all options", () => {
		const wrapper = shallow(
			<FullBleed
				className="monkey"
				padding="large"
				light={true}
				backgroundImage="image.jpg"
			>
				<p>content</p>
			</FullBleed>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should spread additional props onto the container", () => {
		const wrapper = shallow(
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
		expect(wrapper.find("div.full-bleed").props()["data-track"]).toEqual(false);
	});
});
