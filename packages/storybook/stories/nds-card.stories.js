import React from "react";

import { storiesOf } from "@storybook/react";

import { Card } from "@nice-digital/nds-card";

const ListWrapper = props => (
	<ul className="list--unstyled">{props.children}</ul>
);

const FakeLink = props => {
	return (
		<fakelink className="fakelink" {...props}>
			{props.children}
		</fakelink>
	);
};

const nonAnchorLink = () => {
	const headingProps = {
		headingText: "Hello there",
		destination: "/test",
		linkType: FakeLink,
		headerTag: "h3"
	};
	const metaProps = {};
	return (
		<ListWrapper>
			<Card heading={headingProps} meta={metaProps} />
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
