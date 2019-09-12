/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";

import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav";

const heading = {
	label: "Stacked Nav Heading",
	labelTag: "h1"
};

const links = [
	{
		label: "Form Group",
		destination: "#",
		linkTag: "a"
	},
	{
		label: "Page Header",
		destination: "#",
		isCurrent: true,
		linkTag: "a",
		hint: "This is some hint text and this page is current."
	},
	{
		label: "Link Three",
		destination: "#",
		isCurrent: false,
		linkTag: "a"
	}
];

const headingAndLinks = () => (
	<StackedNav heading={heading}>
		{links.map((item, index) => (
			<StackedNavLink {...item} key={`nav${index}`} />
		))}
	</StackedNav>
);

const headingOnly = () => <StackedNav heading={heading} />;

const linkHeading = Object.assign(
	{},
	{
		link: {
			destination: "/heading-link/",
			linkTag: "a",
			isCurrent: true
		}
	},
	heading
);

const headingWithLink = () => <StackedNav heading={linkHeading} />;

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
