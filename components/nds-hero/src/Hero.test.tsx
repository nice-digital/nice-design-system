import React from "react";
import { render } from "@testing-library/react";

import { Hero } from "./Hero";

const actions = (
	<>
		<a href="page-one">Go to page one</a>
		<a href="page-two">Go to page two</a>
	</>
);

const imageUrl = "https://placekitten.com/200/140";

const header = <p>Header content</p>;

describe("Hero", () => {
	it("should match the snapshot with props", () => {
		const wrapper = render(
			<Hero
				title="Welcoming title"
				intro="Introduction text"
				description="Description text"
				actions={actions}
				header={header}
				image={imageUrl}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match the dark variant snapshot with props", () => {
		const wrapper = render(
			<Hero
				title="Welcoming title"
				intro="Introduction text"
				description="Description text"
				actions={actions}
				header={header}
				image={imageUrl}
				isDark={true}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass any number of child components via actions and extra props ", () => {
		const wrapper = render(
			<Hero
				title="Welcoming title"
				intro="Introduction text"
				description="Description text"
				actions={actions}
				data-track={false}
				image={imageUrl}
				className="mt--0"
			/>
		);
		const anchors = wrapper.getAllByRole("link");
		expect(anchors.length).toBe(2);
		expect(anchors[anchors.length - 1].textContent).toBe("Go to page two");
		expect(
			wrapper.container.querySelector("div.hero")?.getAttribute("data-track")
		).toBe("false");
		expect(wrapper.container.querySelector("div.hero")).toHaveClass("mt--0");
	});
});
