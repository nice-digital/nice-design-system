import React from "react";
import { Link } from "react-router-dom";

import {
	HorizontalNav,
	HorizontalNavLink
} from "@nice-digital/nds-horizontal-nav";

const links = [
	{
		title: "Form Group",
		destination: "/formgroup",
		isCurrent: false,
		elementType: Link
	},
	{
		title: "Page Header",
		destination: "/pageheader",
		isCurrent: true,
		elementType: Link
	},
	{
		title: "Stacked Nav",
		destination: "/stackednav",
		isCurrent: false,
		elementType: Link
	},
	{
		title: "Alert",
		destination: "/alert",
		isCurrent: false,
		elementType: Link
	},
	{
		title: "Grid",
		destination: "/grid",
		isCurrent: false,
		elementType: Link
	}
];

export const HorizontalNavView = () => {
	return (
		<HorizontalNav aria-label={"Secondary navigation"}>
			{links.map(link => (
				<HorizontalNavLink {...link} />
			))}
		</HorizontalNav>
	);
};
