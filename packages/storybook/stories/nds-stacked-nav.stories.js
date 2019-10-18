/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";

import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";

const heading = {
	label: "Stacked Nav Heading",
	elementType: "h1"
};

const links = [
	{
		label: "Form Group",
		destination: "#",
		elementType: "a"
	},
	{
		label: "Page Header",
		destination: "#",
		isCurrent: true,
		elementType: "a",
		hint: "This is some hint text and this page is current."
	},
	{
		label: "Link Three",
		destination: "#",
		isCurrent: false,
		elementType: "a"
	}
];

const headingAndLinks = () => (
	<StackedNav {...heading}>
		{links.map((item, index) => (
			<StackedNavLink {...item} key={`nav${index}`} />
		))}
	</StackedNav>
);

const headingOnly = () => <StackedNav {...heading} />;

const linkHeading = Object.assign(
	{},
	{
		link: {
			destination: "/heading-link/",
			elementType: "a",
			isCurrent: true
		}
	},
	heading
);

const headingWithLink = () => <StackedNav {...linkHeading} />;

const noHeading = () => (
	<StackedNav>
		{links.map((item, index) => (
			<StackedNavLink {...item} key={`nav${index}`} />
		))}
	</StackedNav>
);

storiesOf("Stacked Nav", module)
	.add("Heading and links", headingAndLinks)
	.add("Heading label only", headingOnly)
	.add("Heading with current", headingWithLink)
	.add("Links only", noHeading);
