/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";

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

const successTag = <Tag alpha>Success!</Tag>;

const meta = [
	{
		label: "Email address",
		value: "john.smith@hungrykipper.com"
	},
	{
		value: successTag
	}
];

storiesOf("Card", module)
	.add("Heading only, no link", headingOnly)
	.add("H1 heading with link", headingOnlyLink)
	.add("Custom link type", nonAnchorLink)
	.add("Full card with added component in metadata", fullCardWithComponentMeta);
// .add("Full card with component for metadata", fullCardWithComponentMeta);
