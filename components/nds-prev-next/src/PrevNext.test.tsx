import React from "react";
import { render } from "@testing-library/react";
import { PrevNext } from "./PrevNext";

const Link = () => <a href="#">I am a link</a>;

const nextPageLink = {
	text: "Page Header",
	destination: "/pageheader",
	elementType: Link,
	intro: "Show me the next one"
};

const previousPageLink = {
	text: "Alert",
	destination: "/alert"
};

describe("Previous & Next", () => {
	it("should match snapshot with both links supplied", () => {
		const wrapper = render(
			<PrevNext
				nextPageLink={nextPageLink}
				previousPageLink={previousPageLink}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot with one link supplied", () => {
		const wrapper = render(<PrevNext previousPageLink={previousPageLink} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("link should render an href attribute if the elementType is an anchor", () => {
		const wrapper = render(<PrevNext previousPageLink={previousPageLink} />);
		const anchor = wrapper.getByRole("link");
		expect(anchor.getAttribute("href")).toBe("/alert");
	});

	it("should pass extra props to the containing element", () => {
		const { container } = render(
			<PrevNext nextPageLink={nextPageLink} data-tracker="my-tracker" />
		);
		expect(
			container.querySelector(".prev-next")?.getAttribute("data-tracker")
		).toBe("my-tracker");
	});

	it("should merge additional classnames with the component classname", () => {
		const { container } = render(
			<PrevNext nextPageLink={nextPageLink} className="extra-class" />
		);
		expect(container.querySelector(".prev-next")).toHaveClass(
			"prev-next extra-class"
		);
	});
});
