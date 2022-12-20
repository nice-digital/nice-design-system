import React from "react";
import { render } from "@testing-library/react";
import { HorizontalNav, HorizontalNavLink } from "./HorizontalNav";

const Link = () => <div data-type="link"></div>;

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
	it("should match the default snapshot", () => {
		const wrapper = render(
			<HorizontalNav>
				{links.map((link) => (
					<HorizontalNavLink
						key={link.title}
						{...link}
						className="monkey"
						data-track="monkey"
					/>
				))}
			</HorizontalNav>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should render the name of the destination as the link text if no title or child is supplied ", () => {
		const wrapper = render(
			<HorizontalNav>
				<HorizontalNavLink destination="/testing" />
			</HorizontalNav>
		);
		expect(wrapper.getByRole("link", { name: "/testing" })).toBeInTheDocument();
	});

	describe("HorizontalNav", () => {
		it("should pass additional props to the container", () => {
			const wrapper = render(
				<HorizontalNav autoglassrepair="autoglass replace">
					<HorizontalNavLink destination="#">Link text</HorizontalNavLink>
				</HorizontalNav>
			);
			expect(
				wrapper.getByRole("navigation").getAttribute("autoglassrepair")
			).toBe("autoglass replace");
		});

		it("should merge additional classes onto the container", () => {
			const wrapper = render(
				<HorizontalNav className="classy">
					<HorizontalNavLink destination="#">Link text</HorizontalNavLink>
				</HorizontalNav>
			);
			expect(wrapper.getByRole("navigation")).toHaveClass("classy");
		});
	});

	describe("HorizontalNavLink", () => {
		it("NavLink should pass additional props directly to the link", () => {
			const wrapper = render(
				<HorizontalNav>
					<HorizontalNavLink destination="#" dancing="is what we do">
						Link text
					</HorizontalNavLink>
				</HorizontalNav>
			);
			expect(wrapper.getByRole("link").getAttribute("dancing")).toBe(
				"is what we do"
			);
		});

		it("should merge additional classes onto the anchor", () => {
			const wrapper = render(
				<HorizontalNav>
					<HorizontalNavLink destination="#" className="very-classy">
						Link text
					</HorizontalNavLink>
				</HorizontalNav>
			);
			expect(wrapper.getByRole("link")).toHaveClass("very-classy");
		});

		it("should use a custom navigation attribute if supplied, otherwise fall back to href if anchor or to if not", () => {
			const { container } = render(
				<HorizontalNav>
					{links.map((link) => (
						<HorizontalNavLink key={link.title} {...link} />
					))}
				</HorizontalNav>
			);

			expect(
				container.querySelector("a.three")?.getAttribute("pigeon")
			).toBeTruthy();
			expect(
				container.querySelector("a.one")?.getAttribute("href")
			).toBeTruthy();
		});
	});
});
