/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import { Hero } from "@nice-digital/nds-hero";

const myCallsToAction = (
	<>
		<button className="btn btn--cta">Button One</button>
		<button className="btn">Button Two</button>
	</>
);

storiesOf("Hero", module)
	.add("Title only", () => <Hero title="Page Title" />)
	.add("Title and intro", () => (
		<Hero
			title="Page Title"
			intro="This is a hero intro that should explain in a few words what the
	site is about"
		/>
	))
	.add("With Actions", () => (
		<Hero
			title="Page Title"
			intro="This is a hero intro that should explain in a few words what the
	site is about"
			actions={myCallsToAction}
		/>
	))
	.add("With extra detail / links", () => (
		<Hero
			title="Page Title"
			intro="This is a hero intro that should explain in a few words what the
	site is about"
			actions={myCallsToAction}
		>
			<h2 className="h4">Quick links</h2>
			<ul className="list list--unstyled">
				<li>
					<a href="#">Page One</a>
				</li>
				<li>
					<a href="#">Page Two</a>
				</li>
				<li>
					<a href="#">Page Three</a>
				</li>
				<li>
					<a href="#">Page Four</a>
				</li>
				<li>
					<a href="#">Page Five</a>
				</li>
				<li>
					<a href="#">Page Six</a>
				</li>
			</ul>
		</Hero>
	));
