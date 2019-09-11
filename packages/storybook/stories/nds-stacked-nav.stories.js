/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";

import { StackedNav } from "@nice-digital/nds-stacked-nav";

const heading = {
	label: "Stacked Nav Heading",
	labelTag: "h1"
};

const links = [
	{
		label: "Form Group",
		destination: "#",
		isCurrent: false,
		linkTag: "a"
	},
	{
		label: "Page Header",
		destination: "#",
		isCurrent: false,
		linkTag: "a",
		hint: "This is some hint text."
	},
	{
		label: "Link Three",
		destination: "#",
		isCurrent: false,
		linkTag: "a"
	}
];

const headingOnly = <StackedNav heading={heading} links={links} />;

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

const headingWithLink = <StackedNav heading={linkHeading} links={links} />;

const noHeading = <StackedNav links={links} />;

storiesOf("Stacked Nav", module)
	.add("Heading label only", headingOnly)
	.add("Heading with link", headingWithLink)
	.add("Links only", noHeading);
