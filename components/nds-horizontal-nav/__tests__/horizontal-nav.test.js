import React from "react";
import { shallow, mount } from "enzyme";
import { HorizontalNav, HorizontalNavLink } from "../src/HorizontalNav";
import { MemoryRouter, Link } from "react-router-dom";
import toJson from "enzyme-to-json";

const links = [
	{
		title: "Link One",
		destination: "/formgroup",
		className: "one"
	},
	{
		title: "Link Two",
		destination: "/pageheader",
		isCurrent: true,
		elementType: Link,
		className: "two"
	},
	{
		title: "Link Three",
		destination: "/stackednav",
		method: "pigeon",
		className: "three"
	},
	{
		title: "Link Four",
		destination: "/alert",
		elementType: Link,
		method: "to",
		className: "four"
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

		it("should use a custom navigation attribute if supplied, otherwise fall back to href if anchor or to if not", () => {
			const wrapper = mount(
				<MemoryRouter>
					<HorizontalNav>
						{links.map(link => (
							<HorizontalNavLink key={link.title} {...link} />
						))}
					</HorizontalNav>
				</MemoryRouter>
			);

			wrapper.find(Link).forEach(item => {
				expect(item.props()["to"]).toBeTruthy();
			});

			expect(wrapper.find("a.three").props()["pigeon"]).toBeTruthy();

			expect(wrapper.find("a.one").props()["href"]).toBeTruthy();
		});
	});
});
