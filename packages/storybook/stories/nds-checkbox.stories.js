/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { Checkbox } from "@nice-digital/nds-checkbox";

const CheckboxDefault = () => (
	<div>
		<Checkbox label="Email" value="email" name="contact-preference" />
		<Checkbox label="Telephone" value="telephone" name="contact-preference" />
		<Checkbox label="Text Message" value="sms" name="contact-preference" />
	</div>
);

const CheckboxInline = () => {
	return (
		<div>
			<Checkbox inline label="Email" value="email" name="contact-preference" />
			<Checkbox
				inline
				label="Telephone"
				value="telephone"
				name="contact-preference"
			/>
			<Checkbox
				inline
				label="Text Message"
				value="sms"
				name="contact-preference"
			/>
		</div>
	);
};

const CheckboxHint = () => (
	<Checkbox
		label="Email"
		value="email"
		name="contact-preference"
		hint="You can unsubscribe at any time."
	/>
);

const CheckboxError = () => {
	return (
		<Checkbox error label="Email" value="email" name="contact-preference" />
	);
};

const CheckboxErrorWithMessage = () => {
	return (
		<Checkbox
			error="This is an error message."
			label="Email"
			value="email"
			name="contact-preference"
		/>
	);
};

const CheckboxDisabled = () => {
	return (
		<Checkbox disabled label="Email" value="email" name="contact-preference" />
	);
};

const CheckboxCustomise = () => (
	<div>
		<Checkbox
			value="yes"
			label="Yes, please."
			name="my-group"
			inline={boolean("Inline")}
		/>
		<Checkbox
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
			hint={text("Hint text", "You can unsubscribe at any time.")}
		/>
	</div>
);

storiesOf("Checkbox", module)
	.add("Default", CheckboxDefault)
	.add("Inline", CheckboxInline)
	.add("Hint", CheckboxHint)
	.add("Error", CheckboxError)
	.add("Error with message", CheckboxErrorWithMessage)
	.add("Disabled", CheckboxDisabled)
	.add("Try it out", CheckboxCustomise);
