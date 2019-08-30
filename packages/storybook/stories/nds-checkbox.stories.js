/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
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

const CheckboxError = () => {
	return (
		<Checkbox error label="Email" value="email" name="contact-preference" />
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
			group="my-group"
			inline={boolean("Inline")}
		/>
		<Checkbox
			value={text("Value", "no")}
			label={text("Label", "No, thank you.")}
			disabled={boolean("Disabled")}
			error={boolean("Error")}
			group="my-group"
			inline={boolean("Inline")}
		/>
	</div>
);

storiesOf("Checkbox", module)
	.add("Default", CheckboxDefault)
	.add("Inline", CheckboxInline)
	.add("Error", CheckboxError)
	.add("Disabled", CheckboxDisabled)
	.add("Try it out", CheckboxCustomise);
