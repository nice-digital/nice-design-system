/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { Radio } from "@nice-digital/nds-radio";

const RadioDefault = () => (
	<div>
		<Radio label="Yes, please." value="yes" name="my-group" />
		<Radio label="No, thank you." value="no" name="my-group" defaultChecked />
	</div>
);

const RadioError = () => (
	<Radio value="error" label="Error!" error={true} name="my-group" />
);

const RadioErrorWithMessage = () => (
	<Radio value="error" label="Error!" error="Error message." name="my-group" />
);

const RadioHint = () => (
	<Radio
		hint="Some helpful hint text."
		label="Hint"
		value="hint"
		name="my-group"
	/>
);

const RadioDisabled = () => (
	<Radio value="disabled" label="Disabled!" disabled={true} name="my-group" />
);

const RadioInline = () => (
	<div>
		<Radio value="yes" label="Yes, please." name="my-group" inline={true} />
		<Radio value="no" label="No, thank you." name="my-group" inline={true} />
	</div>
);

const RadioCustomise = () => (
	<div>
		<Radio
			value="yes"
			label="Yes, please."
			name="my-group"
			inline={boolean("Inline")}
		/>
		<Radio
			hint={text("Hint", "Hint text can be entered here.")}
			value={text("Value", "no")}
			label={text("Label", "No, thank you.")}
			disabled={boolean("Disabled")}
			error={select(
				"Error",
				{
					False: false,
					True: true,
					"With error message": "With error message"
				},
				false
			)}
			name="my-group"
			inline={boolean("Inline")}
		/>
	</div>
);

storiesOf("Radio", module)
	.add("Default", RadioDefault)
	.add("Error", RadioError)
	.add("Error with message", RadioErrorWithMessage)
	.add("Hint text", RadioHint)
	.add("Disabled", RadioDisabled)
	.add("Inline", RadioInline)
	.add("Try it out", RadioCustomise);
