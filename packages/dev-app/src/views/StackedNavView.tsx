import React from "react";
import {
	StackedNav,
	StackedNavLink,
	StackedNavProps
} from "@nice-digital/nds-stacked-nav";
import { Link } from "react-router-dom";

const links = [
	{
		label: "Form Group",
		destination: "/formgroup",
		isCurrent: false,
		elementType: Link
	},
	{
		label: "Page Header",
		destination: "/pageheader",
		isCurrent: false,
		elementType: Link
	},
	{
		label: "Link Three",
		destination: "/page-three/",
		isCurrent: false
	}
];

export const StackedNavView = () => {
	const subNav2 = (
		<>
			<StackedNavLink hint="Hinty hinty">Six</StackedNavLink>
			<StackedNavLink isCurrent={true}>
				This is a really long name right here, I wonder what it's going to do!?
				There's just no telling.
			</StackedNavLink>
			<StackedNavLink>Eight</StackedNavLink>
		</>
	);
	const subNav = (
		<>
			<StackedNavLink nested={subNav2}>Three</StackedNavLink>
			<StackedNavLink destination="/monkey">Four</StackedNavLink>
			<StackedNavLink>Five</StackedNavLink>
		</>
	);
	return (
		<div className="container pt--d">
			<div className="grid">
				<div data-g="4">
					<StackedNav
						link={{
							destination: "/print",
							isCurrent: true,
							method: "pigeon"
						}}
						label="Stacked Nav Heading"
						elementType="h1"
						data-tracking="nav-wrapper"
					>
						{links.map((item, index) => (
							<StackedNavLink
								data-tracking="nav-element"
								key={`item${index}`}
								{...item}
							/>
						))}
					</StackedNav>
				</div>

				<div data-g="4">
					<StackedNav>
						{links.map((item, index) => (
							<StackedNavLink
								data-tracking="nav-element"
								key={`item${index}`}
								{...item}
							/>
						))}
					</StackedNav>
				</div>
			</div>
		</div>
	);
};
