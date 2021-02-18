import React from "react";
import { shallow, mount } from "enzyme";
// import toJson from "enzyme-to-json";

import { HorizontalNav, HorizontalNavLink } from "../src/HorizontalNav";
import { Link } from "react-router-dom";
import toJson from "enzyme-to-json";

const links = [
	{
		title: "Form Group",
		destination: "/formgroup",
		isCurrent: false
	},
	{
		title: "Page Header",
		destination: "/pageheader",
		isCurrent: true,
		elementType: Link
	},
	{
		title: "Stacked Nav",
		destination: "/stackednav",
		isCurrent: false,
		elementType: Link
	},
	{
		title: "Alert",
		destination: "/alert",
		isCurrent: false,
		elementType: Link
	},
	{
		title: "Grid",
		destination: "/grid",
		isCurrent: false,
		elementType: Link
	}
];

describe("Horizontal Nav Component", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<HorizontalNav />);
		expect(wrapper).toHaveLength(1);
	});

	it("should match the default snapshot", () => {
		const wrapper = shallow(
			<HorizontalNav>
				{links.map(link => (
					<HorizontalNavLink
						key={link.title}
						{...link}
						className="monkey"
						data-track="monkey"
					/>
				))}
			</HorizontalNav>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should render the name of the destination as the link text if no title or child is supplied ", () => {
		const wrapper = mount(
			<HorizontalNav>
				<HorizontalNavLink destination="/testing" />
			</HorizontalNav>
		);
		const link = wrapper.find("a").text();
		expect(link).toEqual("/testing");
	});

	describe("HorizontalNav", () => {
		it("should pass additional props to the container", () => {
			const wrapper = mount(
				<HorizontalNav autoglassrepair="autoglass replace">
					<HorizontalNavLink destination="#">Link text</HorizontalNavLink>
				</HorizontalNav>
			);
			expect(wrapper.props()["autoglassrepair"]).toEqual("autoglass replace");
		});

		it("should merge additional classes onto the container", () => {
			const wrapper = mount(
				<HorizontalNav className="classy">
					<HorizontalNavLink destination="#">Link text</HorizontalNavLink>
				</HorizontalNav>
			);
			expect(wrapper.find("nav").props()["className"]).toEqual(
				"horizontal-nav classy"
			);
		});
	});

	describe("HorizontalNavLink", () => {
		it("NavLink should pass additional props directly to the link", () => {
			const wrapper = mount(
				<HorizontalNav>
					<HorizontalNavLink destination="#" dancing="is what we do">
						Link text
					</HorizontalNavLink>
				</HorizontalNav>
			);
			const linkProps = wrapper.find("a").props();

			expect(linkProps["dancing"]).toEqual("is what we do");
		});
		it("should merge additional classes onto the anchor", () => {
			const wrapper = mount(
				<HorizontalNav>
					<HorizontalNavLink destination="#" className="very-classy">
						Link text
					</HorizontalNavLink>
				</HorizontalNav>
			);
			expect(wrapper.find("a").props()["className"]).toEqual(
				"horizontal-nav__link very-classy"
			);
		});
	});
});
