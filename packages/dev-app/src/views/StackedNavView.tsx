import React from "react";
import { StackedNav } from "@nice-digital/nds-stacked-nav";
import { Link } from "react-router-dom";

const heading = {
	label: "This is the heading title",
	labelTag: "h1"
};

const links = [
	{
		label: "This is a label",
		destination: "/hello/",
		isCurrent: true,
		linkTag: "a"
	},
	{
		label: "Navigate to formgroup",
		destination: "/formgroup",
		isCurrent: false,
		linkTag: Link
	},
	{
		label: "This is the third label",
		destination: "/hello-there-again/",
		isCurrent: false,
		linkTag: "a"
	}
];

export const StackedNavView = () => {
	return (
		<div className="container pt--d">
			<div className="grid">
				<div data-g="4">
					<StackedNav heading={heading} links={links} />
				</div>
				<div data-g="8">
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
			</div>
		</div>
	);
};
