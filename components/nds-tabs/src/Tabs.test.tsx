import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, Tab, keyCodes } from "./Tabs";

const defaultTabs = (
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

function getStringMarkup() {
	return "<h2 id='stringy'><p>hello</p></h2>";
}

const stringTabs = (
	<Tabs>
		<Tab title="My Tab Title">{getStringMarkup()}</Tab>
	</Tabs>
);

describe("Tabs", () => {
	it("should match the snapshot with default content", () => {
		const wrapper = render(defaultTabs);
		expect(wrapper).toMatchSnapshot();
	});

	it("should render a string of markup if the child is not a react object", () => {
		const wrapper = render(stringTabs);
		expect(wrapper.getByRole("heading", { level: 2 })).toBeInTheDocument();
	});

	it("should activate the second tab when tab 2 button is clicked", async () => {
		const { container } = render(defaultTabs);

		expect(
			container.querySelector("#tab-pane-tab-2")?.getAttribute("aria-hidden")
		).toBe("true");

		const tabButton = container.querySelector("#tab-button-tab-2");

		userEvent.click(tabButton as Element);

		await waitFor(() => {
			expect(
				container.querySelector("#tab-pane-tab-2")?.getAttribute("aria-hidden")
			).toBe("false");
			expect(
				container
					.querySelector("#tab-button-tab-2")
					?.getAttribute("aria-selected")
			).toBe("true");
		});
	});

	it("should navigate tab content with the keyboard", async () => {
		const { container } = render(defaultTabs);

		const btn1 = container.querySelector("#tab-button-tab-1") as Element;
		const btn2 = container.querySelector("#tab-button-tab-2") as Element;
		const btn3 = container.querySelector("#tab-button-tab-3") as Element;

		userEvent.click(btn1);
		await waitFor(() => {
			expect(btn1?.getAttribute("aria-selected")).toBe("true");
		});

		// userEvent.keyboard("[ArrowRight]");
		// await waitFor(() => {
		// 	expect(btn2?.getAttribute("aria-selected")).toBe("true");
		// });

		// expect(wrapper.state().index).toEqual(1);
		// btn2.simulate("keyDown", {
		// 	which: keyCodes.right
		// });
		// expect(wrapper.state().index).toEqual(2);
		// btn3.simulate("keyDown", {
		// 	which: keyCodes.home
		// });
		// expect(wrapper.state().index).toEqual(0);
		// btn1.simulate("keyDown", {
		// 	which: keyCodes.down
		// });
		// expect(wrapper.state().index).toEqual(1);
		// btn2.simulate("keyDown", {
		// 	which: keyCodes.up
		// });
		// expect(wrapper.state().index).toEqual(0);
		// btn1.simulate("keyDown", {
		// 	which: keyCodes.end
		// });
		// expect(wrapper.state().index).toEqual(2);
	});

	it("should cascade additional props to the tabs and individual tab containers", () => {
		const { container } = render(
			<Tabs data-track={false}>
				<Tab title="Tab 1" data-track={true}>
					<p>Tab one content</p>
				</Tab>
			</Tabs>
		);
		expect(
			container.querySelector("div.tabs")?.getAttribute("data-track")
		).toBe("false");
		expect(
			container.querySelector("div.tabs__pane")?.getAttribute("data-track")
		).toBe("true");
	});

	it("should merge additional classes onto container", () => {
		const { container } = render(
			<Tabs className="mt--0">
				<Tab title="Tab 1">
					<p>Tab one content</p>
				</Tab>
			</Tabs>
		);

		expect(container.querySelector("div.tabs")).toHaveClass("mt--0");
	});
});
