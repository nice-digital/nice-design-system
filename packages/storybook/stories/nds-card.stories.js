/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Card } from "@nice-digital/nds-card";
import { Tag } from "@nice-digital/nds-tag";

const ListWrapper = props => (
	<ul className="list--unstyled">{props.children}</ul>
);

const FakeLink = props => {
	return (
		<a className="non-standard-link-type-example" {...props}>
			{props.children}
		</a>
	);
};

const headingOnly = () => {
	const headingProps = {
		headingText: "Hello there"
	};
	return (
		<ListWrapper>
			<Card heading={headingProps} />
		</ListWrapper>
	);
};

const headingOnlyLink = () => {
	const headingProps = {
		headingText: "Hello there",
		destination: "/",
		linkTag: "a",
		headerTag: "h1"
	};
	return (
		<ListWrapper>
			<Card heading={headingProps} />
		</ListWrapper>
	);
};

const nonAnchorLink = () => {
	const headingProps = {
		headingText: "This card has a custom link tag",
		destination: "/test",
		linkTag: FakeLink,
		headerTag: "h3"
	};
	return (
		<ListWrapper>
			<Card heading={headingProps} />
		</ListWrapper>
	);
};

const fullCardWithComponentMeta = () => {
	const fullProps = {
		heading: {
			headingText: "Full card with component in metadata"
		},
		metadata: [
			{
				value: <Tag alpha>Component as value</Tag>
			},
			{
				value: "just a label"
			},
			{
				label: "Email address",
				value: "value with a label"
			}
		]
	};
	return (
		<ListWrapper>
			<Card {...fullProps} />
		</ListWrapper>
	);
};

const customisable = () => {
	return (
		<ListWrapper>
			<Card
				heading={{
					headingText: text("headingText", "Card heading text"),
					destination: text("destination", "/about/"),
					linkTag: text("linkTag", "a" || "a"),
					headingTag: text("headingTag", "h1" || "h1")
				}}
				metadata={[
					{
						value: text("Metadata 1 label", "Label"),
						label: text("Metadata 1 value", "Value")
					},
					{
						value: text("Metadata 2 label", "Label"),
						label: text("Metadata 2 value", "Value")
					}
				]}
			/>
		</ListWrapper>
	);
};

storiesOf("Card", module)
	.addDecorator(withKnobs)
	.add("Heading only, no link", headingOnly)
	.add("H1 heading with link", headingOnlyLink)
	.add("Custom link type", nonAnchorLink)
	.add("Full card with added component in metadata", fullCardWithComponentMeta)
	.add("Customisable", customisable);
