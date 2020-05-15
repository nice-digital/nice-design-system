/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import { Textarea } from "@nice-digital/nds-textarea";

const Basic = () => <Textarea name="textarea" label="Your address" />;

const Hint = () => (
	<Textarea
		name="textarea"
		label="Your address"
		hint="Enter your full address including post code"
	/>
);

const Error = () => (
	<Textarea
		name="textarea"
		label="Your address (required)"
		error={true}
		errorMessage="This field is required"
	/>
);

const TryItOut = () => (
	<Textarea
		name="textarea"
		label={text("Label", "Your address")}
		error={boolean("Error", false)}
		errorMessage={text("Error message", "This field is required")}
		hint={text("Hint", "Enter your full address including post code")}
	/>
);

storiesOf("Textarea", module)
	.add("Basic", Basic)
	.add("Hint", Hint)
	.add("Error", Error)
	.add("Try it out", TryItOut);
