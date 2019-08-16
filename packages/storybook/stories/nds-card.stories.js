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

const successTag = () => <Tag alpha>Success!</Tag>;

const meta = [
	{
		label: "Email address",
		value: "john.smith@hungrykipper.com"
	},
	{
		value: successTag
	}
];

const nonAnchorLink = () => {
	const headingProps = {
		headingText: "Hello there",
		destination: "/test",
		linkType: FakeLink,
		headerTag: "h3"
	};
	return (
		<ListWrapper>
			<Card heading={headingProps} metadata={meta} />
		</ListWrapper>
	);
};

const anchorLink = () => {
	const headingProps = {
		headingText: "Hello",
		destination: "/test",
		linkType: "a",
		headerTag: "h3"
	};
	const metaProps = {};
	return (
		<ListWrapper>
			<Card heading={headingProps} meta={metaProps} />
		</ListWrapper>
	);
};

storiesOf("Card", module)
	.add("Non anchor link type", nonAnchorLink)
	.add("Standard anchor link type", anchorLink);
