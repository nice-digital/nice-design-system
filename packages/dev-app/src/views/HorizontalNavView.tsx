import React from "react";
import { Link } from "react-router-dom";

import {
	HorizontalNav,
	HorizontalNavLink
} from "@nice-digital/nds-horizontal-nav";

const links = [
	{
		title: "Should be 'href'",
		destination: "/formgroup"
	},
	{
		title: "Should be 'to'",
		destination: "/pageheader",
		isCurrent: true,
		elementType: Link
	},
	{
		title: "Should be 'pigeon'",
		destination: "/stackednav",
		method: "pigeon"
	},
	{
		title: "Should be 'to'!",
		destination: "/alert",
		elementType: Link,
		method: "to"
	}
];

export const HorizontalNavView = () => {
	return (
		<HorizontalNav aria-label={"Secondary navigation"}>
			{links.map(link => (
				<HorizontalNavLink
					key={link.title}
					{...link}
					className="monkey"
					data-track="monkey"
				/>
			))}
		</HorizontalNav>
	);
};
