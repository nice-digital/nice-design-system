/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import { Panel } from "@nice-digital/nds-panel";

storiesOf("Panel", module)
	.add("Default (supporting)", () => (
		<Panel>
			<h2 className="h3">Default (supporting) panel</h2>
			<p>
				Panels are boxes to highlight or separate content. They automatically
				remove the vertical margins from the first and last children to maintain
				a consistent padding.
			</p>
			<p>
				Don’t over-use panels: consider key lines, grids, margins, padding or
				whitespace to make interesting layouts and separate content.
			</p>
			<p>Use supporting panels:</p>
			<ul>
				<li>to show supporting or related information</li>
				<li>or to signpost to additional content.</li>
			</ul>
		</Panel>
	))
	.add("Impact", () => (
		<Panel variant="impact">
			<h2>Impact panel</h2>
			<p>This is a impact panel:</p>
			<ul>
				<li>use a maximum of one per page</li>
				<li>use to highlight key information on a page</li>
				<li>contain the key call(s) to action</li>
				<li>
					don’t use an h1 for the title - consider a page heading or a hero
					component instead
				</li>
				<li>
					it’s{" "}
					<a href="https://www.nice.org.uk/brand/colour-palette">NICE Blue 3</a>{" "}
					which allows it to be used under a (teal) hero banner if need be.
				</li>
			</ul>
		</Panel>
	))
	.add("Primary", () => (
		<Panel variant="primary">
			<h2>Primary panel</h2>
			<p>Use a primary panel:</p>
			<ul>
				<li>to group related content</li>
				<li>or to clearly separate content</li>
				<li>or for visual interest</li>
			</ul>
		</Panel>
	))
	.add("In a grid", () => (
		<div className="grid">
			<div data-g="12 md:8">Main content would go here</div>
			<aside data-g="12 md:4">
				<Panel className="mt--0">
					<h2 className="h3">Primary panel</h2>
					<p>An example of a supporting panel in aside bar</p>
				</Panel>
			</aside>
		</div>
	))
	.add("Try it out", () => {
		const HeadingTag = select(
			"Heading level",
			{
				h2: "h2",
				h3: "h3",
				h4: "h4"
			},
			"h2"
		);

		return (
			<Panel
				variant={select("Variant", Panel.variants)}
				className={text("Additional class(es)", "mt--0")}
			>
				<HeadingTag>{text("Heading text", "Lorem ipsum")}</HeadingTag>
				<p>
					{text(
						"Body text",
						"Dolor sit amet, consectetur adipiscing elit. Sed at mauris tortor. Nunc ligula nulla, egestas eget risus vitae, interdum dapibus urna."
					)}
				</p>
			</Panel>
		);
	});
