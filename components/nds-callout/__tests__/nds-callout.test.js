import React from "react";
import { shallow, mount } from "enzyme";
import { Callout, CalloutBody, CalloutImage } from "../src/Callout";
import toJson from "enzyme-to-json";

describe("Callout component", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<Callout />);
		expect(wrapper).toHaveLength(1);
	});

	it("should match the snapshot", () => {
		const wrapper = mount(
			<Callout data-track={false}>
				<CalloutImage>
					<img src="test.jpg" alt="" />
				</CalloutImage>
				<CalloutBody>
					<h2>
						<a href="/test">Card title</a>
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
						veniam?
					</p>
				</CalloutBody>
			</Callout>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	describe("CalloutImage component", () => {
		it("should merge classes and pass down additional props to the component ", () => {
			const wrapper = mount(
				<Callout>
					<CalloutImage className="testing-1" data-track="testing-2">
						<img src="test.jpg" alt="" />
					</CalloutImage>
				</Callout>
			);
			const div = wrapper.find("div.testing-1");
			expect(div.props()["data-track"]).toEqual("testing-2");
		});
	});
	describe("CalloutBody component", () => {
		it("should merge classes and pass down additional props to the component ", () => {
			const wrapper = mount(
				<Callout>
					<CalloutBody className="testing-3" data-track="testing-4">
						<h2>
							<a href="#testing">Testing</a>
						</h2>
					</CalloutBody>
				</Callout>
			);
			const div = wrapper.find("div.testing-3");
			expect(div.props()["data-track"]).toEqual("testing-4");
		});
	});
});
