"use strict";

import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Hero } from "../src/Hero";

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
	it("should render without crashing", () => {
		const wrapper = shallow(<Hero title="Welcoming title" />);
		expect(wrapper).toHaveLength(1);
	});

	it("should match the snapshot with props", () => {
		const wrapper = shallow(
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
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should pass any number of child components via actions and extra props ", () => {
		const wrapper = mount(
			<Hero
				title="Welcoming title"
				intro="Introduction text"
				actions={actions}
				data-track={false}
			>
				{extras}
			</Hero>
		);
		const anchor = wrapper.find("a[href='page-two']");
		expect(anchor).toHaveLength(2);
		expect(anchor.last().text()).toEqual("Go to page two");
		expect(wrapper.find("div.hero").props()["data-track"]).toEqual(false);
	});
});
