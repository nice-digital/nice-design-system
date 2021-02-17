/* eslint react/prop-types: 0 */
import React from "react";
import {
	HorizontalNav,
	HorizontalNavLink
} from "@nice-digital/nds-horizontal-nav";

import { storiesOf } from "@storybook/react";

const links = [
	{
		title: "Guidance",
		destination: "#",
		isCurrent: false,
		elementType: "a"
	},
	{
		title: "Tools and resources",
		destination: "#",
		isCurrent: true,
		elementType: "a"
	},
	{
		title: "Information for the public",
		destination: "#",
		isCurrent: false,
		elementType: "a"
	},
	{
		title: "Evidence",
		destination: "#",
		isCurrent: false,
		elementType: "a"
	},
	{
		title: "History",
		destination: "#",
		isCurrent: false,
		elementType: "a"
	}
];

const Default = () => (
	<HorizontalNav>
		{links.map(link => (
			<HorizontalNavLink key={link.title} {...link} />
		))}
	</HorizontalNav>
);

storiesOf("Components/Horizontal Nav", module).add("Default", Default);
