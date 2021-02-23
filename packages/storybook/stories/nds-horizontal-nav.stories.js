import React from "react";
import {
	HorizontalNav,
	HorizontalNavLink
} from "@nice-digital/nds-horizontal-nav";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

const links = [
	{
		title: "Guidance",
		destination: "#",
		isCurrent: true
	},
	{
		title: "Tools and resources",
		destination: "#"
	},
	{
		title: "Information for the public",
		destination: "#"
	},
	{
		title: "Evidence",
		destination: "#"
	},
	{
		title: "History",
		destination: "#"
	}
];

const Default = () => (
	<HorizontalNav>
		{links.map(link => (
			<HorizontalNavLink key={link.title} {...link} />
		))}
	</HorizontalNav>
);

const TryItOut = () => (
	<HorizontalNav>
		<HorizontalNavLink
			isCurrent={boolean("Current active", true, "First link")}
			className={text("Additional classes", "", "First link")}
			data-track={text(
				"Additional data attribute",
				"for-tracking-purposes",
				"First link"
			)}
		>
			{text("Title", "Example", "First link")}
		</HorizontalNavLink>
		<HorizontalNavLink
			isCurrent={boolean("Current active", false, "Second link")}
			className={text("Additional classes", "", "Second link")}
			data-track={text(
				"Additional data attribute",
				"for-tracking-purposes",
				"Second link"
			)}
		>
			{text("Title", "Example", "Second link")}
		</HorizontalNavLink>
	</HorizontalNav>
);

storiesOf("Components/Horizontal Nav", module)
	.add("Default", Default)
	.add("Try it out", TryItOut);
