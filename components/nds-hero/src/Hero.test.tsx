import React from "react";
import { render } from "@testing-library/react";

import { Hero } from "./Hero";

const actions = (
	<>
		<a href="page-one">Go to page one</a>
		<a href="page-two">Go to page two</a>
	</>
);

const header = <p>Header content</p>;

const footer = <p>Footer content</p>;

const extras = (
	<>
		<h2>Quick links</h2>
		<ul>
			<li>
				<a href="page-one">Go to page one</a>
			</li>
			<li>
				<ul>
					<li>
						<a href="page-two">Go to page two</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="page-three">Go to page three</a>
			</li>
		</ul>
	</>
);

describe("Hero", () => {
	it("should match the snapshot with props", () => {
		const wrapper = render(
			<Hero
				title="Welcoming title"
				intro="Introduction text"
				actions={actions}
				header={header}
				footer={footer}
			>
				{extras}
			</Hero>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass any number of child components via actions and extra props ", () => {
		const wrapper = render(
			<Hero
				title="Welcoming title"
				intro="Introduction text"
				actions={actions}
				data-track={false}
				className="mt--0"
			>
				{extras}
			</Hero>
		);
		const anchors = wrapper.getAllByRole("link", { name: "Go to page two" });
		expect(anchors.length).toBe(2);
		expect(anchors[anchors.length - 1].textContent).toBe("Go to page two");
		expect(
			wrapper.container.querySelector("div.hero")?.getAttribute("data-track")
		).toBe("false");
		expect(wrapper.container.querySelector("div.hero")).toHaveClass("mt--0");
	});
});
