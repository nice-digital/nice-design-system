import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { ActionBanner } from "../src/ActionBanner";

describe("ActionBanner", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<ActionBanner title="Title">Body</ActionBanner>);
		expect(wrapper).toHaveLength(1);
	});

	it("should match snapshot for default action banner", () => {
		const wrapper = shallow(
			<ActionBanner title="Some title" cta={<a href="/test">Some CTA</a>}>
				Some body
			</ActionBanner>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should match snapshot for closeable subtle action banner", () => {
		const wrapper = shallow(
			<ActionBanner
				variant="subtle"
				title="Some title"
				cta={<a href="/test">Some CTA</a>}
				onClosing={jest.fn()}
			>
				Some body
			</ActionBanner>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should not render an empty CTA", () => {
		const wrapper = shallow(<ActionBanner title="Title">Body</ActionBanner>);
		expect(wrapper.find(".action-banner__actions")).toHaveLength(0);
	});

	it("should hide banner after clicking close button", () => {
		const wrapper = shallow(
			<ActionBanner title="Title" onClosing={jest.fn()}>
				Body
			</ActionBanner>
		);
		wrapper.find(".action-banner__close").simulate("click");
		wrapper.update();
		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it("should call onClosing prop with component instance on close button click", () => {
		const onClosing = jest.fn();
		const wrapper = shallow(
			<ActionBanner title="Title" onClosing={onClosing}>
				Body
			</ActionBanner>
		);
		wrapper.find(".action-banner__close").simulate("click");
		expect(onClosing).toHaveBeenCalledTimes(1);
		expect(onClosing).toHaveBeenCalledWith(wrapper.instance());
	});

	it("should throw error on close button click when onClosing is not a function", () => {
		// Suppress the prop type warning from passing a non function to onClosing
		const oldConsoleError = console.error;
		console.error = jest.fn();

		const wrapper = shallow(
			<ActionBanner title="Title" onClosing="not a function">
				Body
			</ActionBanner>
		);

		expect(() => {
			wrapper.find(".action-banner__close").simulate("click");
		}).toThrow("The onClosing prop should be a function");
		console.error = oldConsoleError;
	});
});
