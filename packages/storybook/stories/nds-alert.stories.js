/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import { Alert } from "@nice-digital/nds-alert";

storiesOf("Components/Alert", module)
	.add("Info", () => (
		<Alert type="info">
			<h1>Info alert</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
				feugiat libero in condimentum consectetur.
			</p>
		</Alert>
	))
	.add("Success", () => (
		<Alert type="success">
			<h1>Success alert</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
				feugiat libero in condimentum consectetur.
			</p>
		</Alert>
	))
	.add("Error", () => (
		<Alert type="error">
			<h1>Error alert</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
				feugiat libero in condimentum consectetur.
			</p>
		</Alert>
	))
	.add("Caution", () => (
		<Alert type="caution">
			<h1>Caution alert</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
				feugiat libero in condimentum consectetur.
			</p>
		</Alert>
	))
	.add("Try it out", () => (
		<Alert type={select("Type", ["info", "success", "error", "caution"])}>
			<h1>{text("Example H1", "Alert title")}</h1>
			<p>
				{text(
					"Example paragraph",
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat libero in condimentum consectetur. Nulla faucibus, risus sed dapibus molestie, elit leo faucibus velit, ac ullamcorper felis tellus et dolor. Duis fringilla, sapien eu ullamcorper condimentum, massa quam iaculis ante, ac iaculis erat dolor nec nulla. Vestibulum tempus lacus lectus, sit amet ultricies enim tristique fermentum. Nullam vitae diam eu nisl tincidunt pretium. Phasellus feugiat ultricies luctus. Aenean a justo posuere, pharetra velit at, accumsan metus."
				)}
			</p>
		</Alert>
	));
