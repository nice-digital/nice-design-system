import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Tabs, Tab, keyCodes } from "../src/Tabs";

const wrapper = mount(
	<Tabs>
		<Tab title="Tab 1">
			<p>Tab one content</p>
		</Tab>
		<Tab title="Tab 2">
			<p>Tab two content</p>
		</Tab>
		<Tab title="Tab 3">
			<p>Tab three content</p>
		</Tab>
	</Tabs>
);

describe("Tabs", () => {
	it("should render without crashing", () => {
		expect(wrapper).toHaveLength(1);
	});

	it("should match the snapshot with default content", () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should activate the second tab when tab 2 button is clicked", () => {
		expect(wrapper.find("#tab-pane-tab-2").props()["aria-hidden"]).toEqual(
			true
		);
		wrapper.find("#tab-button-tab-2").simulate("click");
		expect(wrapper.find("#tab-pane-tab-2").props()["aria-hidden"]).toEqual(
			false
		);
		expect(wrapper.find("#tab-button-tab-2").props()["aria-selected"]).toEqual(
			true
		);
	});

	it("should navigate tab content with the keyboard", () => {
		const btn1 = wrapper.find("#tab-button-tab-1");
		const btn2 = wrapper.find("#tab-button-tab-2");
		const btn3 = wrapper.find("#tab-button-tab-3");

		btn1.simulate("click");

		expect(wrapper.state().index).toEqual(0);
		btn1.simulate("keyDown", {
			which: keyCodes.right
		});
		expect(wrapper.state().index).toEqual(1);
		btn2.simulate("keyDown", {
			which: keyCodes.right
		});
		expect(wrapper.state().index).toEqual(2);
		btn3.simulate("keyDown", {
			which: keyCodes.home
		});
		expect(wrapper.state().index).toEqual(0);
		btn1.simulate("keyDown", {
			which: keyCodes.down
		});
		expect(wrapper.state().index).toEqual(1);
		btn2.simulate("keyDown", {
			which: keyCodes.up
		});
		expect(wrapper.state().index).toEqual(0);
		btn1.simulate("keyDown", {
			which: keyCodes.end
		});
		expect(wrapper.state().index).toEqual(2);
	});
});
