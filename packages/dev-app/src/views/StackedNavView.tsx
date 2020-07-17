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

const headingProps: StackedNavProps = {
	label: "Stacked Nav Heading",
	elementType: "h1"
};

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
					<StackedNav {...headingProps}>
						<StackedNavLink destination="/testing">Testing</StackedNavLink>

						{links.map((item, index) => (
							<StackedNavLink key={`item${index}`} {...item} />
						))}
						<StackedNavLink destination="/hello">
							This is a child not a label
						</StackedNavLink>
						<StackedNavLink label="test" />
					</StackedNav>
				</div>
				<div data-g="4">
					<h1>Stacked Nav</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
						expedita dolore quasi id suscipit placeat ad est at, ex, modi quia
						quod error, voluptas ipsam magni vitae inventore beatae consequatur.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
						nihil laudantium? Incidunt alias suscipit officiis tempore odio!
						Quod, sunt commodi?
					</p>
				</div>
				<div data-g="4">
					<StackedNav aria-label="My amazing list" className="mt--d monkey">
						<StackedNavLink nested={subNav}>One</StackedNavLink>
						<StackedNavLink>Two</StackedNavLink>
					</StackedNav>
				</div>
			</div>
		</div>
	);
};
