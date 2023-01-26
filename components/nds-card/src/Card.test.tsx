import React from "react";
import { render } from "@testing-library/react";

import { Card, CardProps, CardHeadingLinkProps } from "./Card";

const headingProps: CardHeadingLinkProps = {
	headingText: "Card heading text",
	headingElementType: "h1",
	link: {
		destination: "/about",
		elementType: "a"
	}
};
const metadataProps = [
	{
		value: "john.smith@email.com",
		label: "Email address"
	},
	{
		value: "sarah.smith@email.com",
		label: "Email address"
	}
];

const props: CardProps = {
	headingText: "Card heading text",
	headingElementType: "h1",
	link: {
		destination: "/about",
		elementType: "a"
	},
	metadata: metadataProps
};

describe("Card", () => {
	it("should match snapshot with some default attributes", () => {
		const wrapper = render(
			<>
				<Card {...props} summary="I'm just a string" />
				<Card
					{...props}
					image={<img src="test.png" alt="Cute dog" />}
					summary={
						<span>
							how <b>bold</b> of you
						</span>
					}
				/>
			</>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should match snapshot for the callout variant", () => {
		const wrapper = render(
			<>
				<Card {...props} summary="I'm just a string" callout={true} />
				<Card
					{...props}
					image={<img src="test.png" alt="Cute dog" />}
					summary={
						<span>
							how <b>bold</b> of you
						</span>
					}
					callout={true}
				/>
			</>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("should pass extra props to the containing element", () => {
		const localProps = Object.assign({}, props, {
			"data-tracker": "my-tracker"
		});
		const { container } = render(<Card {...localProps} />);
		expect(container.querySelector(".card")?.getAttribute("data-tracker")).toBe(
			"my-tracker"
		);
	});

	it("should create a card with the containing element type as supplied", () => {
		const wrapper = render(<Card headingText="My Heading" elementType="li" />);
		expect(wrapper.getByRole("listitem")).toBeInTheDocument();
	});

	it("should render each metadata item with a value", () => {
		const { container } = render(<Card {...props} />);
		expect(container.querySelectorAll(".card__metadatum").length).toBe(2);
	});

	it("should not render a metadata item without a value", () => {
		const localMetadataProps = [...metadataProps];
		localMetadataProps[0].value = "";
		const { container } = render(
			<Card {...props} metadata={localMetadataProps} />
		);
		expect(container.querySelectorAll(".card__metadatum").length).toBe(1);
	});

	it("should render an href attribute if the elementType is an anchor", () => {
		const wrapper = render(<Card {...props} />);
		const anchor = wrapper.getByRole("link");
		expect(anchor.getAttribute("href")).toBe("/about");
	});

	it("should pass a custom navigaiton method if supplied", () => {
		const localProps = Object.assign({}, props, {
			link: { method: "pigeon", destination: "/about" }
		});
		const { container } = render(<Card {...localProps} />);
		const anchor = container.querySelector("a");
		expect(anchor?.getAttribute("pigeon")).toBe("/about");
	});

	it("should not hide label if a metadatum has a visibleLabel property", () => {
		const { container } = render(
			<Card
				headingText="Hello"
				metadata={[
					{
						label: "Email address",
						value: "test@test.com"
					},
					{
						label: "Published on",
						value: "27 May 2012",
						visibleLabel: true
					},
					{
						label: "Reviewed on",
						value: "27 May 2022",
						visibleLabel: false
					}
				]}
			/>
		);
		expect(container.querySelectorAll("dt.visually-hidden").length).toBe(2);
		expect(container.querySelectorAll("dt").length).toBe(3);
	});

	it("should render a wrapped child element", () => {
		const { container } = render(
			<>
				<Card headingText="Children rendering">
					<b id="child">Render child</b>
				</Card>
			</>
		);
		const childElement = container.querySelector("#child");
		expect(childElement?.textContent).toBe("Render child");
	});
});
