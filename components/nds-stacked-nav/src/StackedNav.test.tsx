import { render } from "@testing-library/react";
import { StackedNav, StackedNavLink } from "./StackedNav";

const heading = {
	label: "Stacked Nav Heading",
	elementType: "h1"
};

const links = [
	{
		label: "Form Group",
		destination: "#",
		isCurrent: true,
		elementType: "a"
	},
	{
		label: "Page Header",
		destination: "#",
		elementType: "a",
		hint: "This is a piece of hint text"
	},
	{
		label: "Link Three",
		destination: "#",
		elementType: "a"
	},
	{
		label: "Link Four",
		destination: "#",
		elementType: "a"
	},
	{
		destination: "#",
		elementType: "a"
	}
];

const subNav = (
	<>
		<StackedNavLink>Nested nav one</StackedNavLink>
		<StackedNavLink>Nested nav two</StackedNavLink>
		<StackedNavLink>Nested nav three</StackedNavLink>
	</>
);

describe("StackedNav", () => {
	it("should match snapshot with supplied props", () => {
		const { container } = render(
			<StackedNav {...heading}>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);

		expect(container).toMatchSnapshot();
	});

	it("should match snapshot with supplied nested links", () => {
		const { container } = render(
			<StackedNav {...heading}>
				<StackedNavLink {...links[0]} nested={subNav} />
			</StackedNav>
		);

		expect(container).toMatchSnapshot();
	});

	it("should render a custom tag when passed to the header", () => {
		const localHeading = Object.assign({}, heading, {
			elementType: "h6"
		});
		const wrapper = render(
			<StackedNav {...localHeading}>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		expect(wrapper.getByRole("heading", { level: 6 })).toBeInTheDocument();
	});

	it("should render a custom method in the heading if one is supplied", () => {
		const localHeading = Object.assign({}, heading, {
			elementType: "h6",
			link: {
				method: "pigeon",
				label: "Pigeon",
				destination: "/pigeon"
			}
		});
		const wrapper = render(
			<StackedNav {...localHeading}>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		const heading6 = wrapper.getByRole("heading", { level: 6 });
		const link = heading6.querySelector("a");
		expect(link?.getAttribute("pigeon")).toBe("/pigeon");
	});

	it("should render an appropriate navigation attribute depending on the options supplied", () => {
		const links = [
			{
				label: "One",
				destination: "one"
			},
			{
				label: "Two",
				destination: "two",
				method: "pigeon"
			}
		];

		const wrapper = render(
			<StackedNav>
				{links.map((item, index) => (
					<StackedNavLink key={index} {...item} />
				))}
			</StackedNav>
		);

		expect(wrapper.getByRole("link").getAttribute("href")).toBe("one");

		const { container } = wrapper;
		container.querySelectorAll("a").forEach((link) => {
			if (link.getAttribute("pigeon")) {
				expect(link.getAttribute("pigeon")).toBe("two");
			}
		});
	});

	it("should not render a root tag unless the label is present", () => {
		const { container } = render(
			<StackedNav>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		expect(
			container.querySelector(".stacked-nav__root")
		).not.toBeInTheDocument();
	});

	it("should render the correct number of list items passed to it", () => {
		const wrapper = render(
			<StackedNav {...heading}>
				{links.map((item, index) => (
					<StackedNavLink key={`idx${index}`} {...item} />
				))}
			</StackedNav>
		);
		expect(wrapper.getAllByRole("listitem")).toHaveLength(4);
	});

	it("should render a label as a priority over a child string", () => {
		const wrapper = render(
			<StackedNav {...heading}>
				<StackedNavLink label="One">Two</StackedNavLink>
				<StackedNavLink>Two</StackedNavLink>
			</StackedNav>
		);

		const items = wrapper.queryAllByRole("listitem");
		expect(items[0].textContent).toBe("One");
		expect(items[1].textContent).toBe("Two");
	});

	it("should pass any additionally supplied props to the parent nav and to the child link", () => {
		const wrapper = render(
			<StackedNav data-test="true">
				<StackedNavLink label="One" data-another-test="true">
					Two
				</StackedNavLink>
				<StackedNavLink>Two</StackedNavLink>
			</StackedNav>
		);

		expect(wrapper.getByRole("navigation").getAttribute("data-test")).toBe(
			"true"
		);

		wrapper.queryAllByRole("li").forEach((item, index) => {
			if (index === 0) {
				expect(item.getAttribute("data-another-test")).toBe("true");
			}
		});
	});
});
