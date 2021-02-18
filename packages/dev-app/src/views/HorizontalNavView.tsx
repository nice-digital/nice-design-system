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

const linksRealistic = [
	{ title: "Guidance", destination: "#" },
	{ title: "Tools and resources", destination: "#" },
	{ title: "Information for the public", destination: "#" },
	{ title: "Evidence", destination: "#", isCurrent: true },
	{ title: "History", destination: "#" },
	{ title: "How we developed this guidance", destination: "#" }
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
