/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { FormGroup } from "@nice-digital/nds-form-group";
import { Radio } from "@nice-digital/nds-radio";
import { Checkbox } from "@nice-digital/nds-checkbox";

const Default = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-consent"
	>
		<Radio value="Yes" />
		<Radio value="No" />
	</FormGroup>
);

const Inline = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-consent"
		inline
	>
		<Radio value="Yes" />
		<Radio value="No" />
		<Radio value="Maybe" />
	</FormGroup>
);

const Error = () => (
	<FormGroup
		legend="How would you like us to contact you?"
		name="contact-preference"
		groupError="Please choose at least one contact method"
	>
		<Checkbox value="Email" />
		<Checkbox value="Telephone" />
		<Checkbox value="Text Message" />
	</FormGroup>
);

const Hint = () => (
	<FormGroup
		legend="How would you like us to contact you?"
		name="contact-preference"
		hint="We promise not to contact you too often!"
	>
		<Checkbox value="Email" />
		<Checkbox value="Telephone" />
		<Checkbox value="Text Message" />
	</FormGroup>
);

const NoLegend = () => (
	<FormGroup>
		<Radio value="Yes" checked />
		<Radio value="No" />
		<Radio value="Maybe" />
	</FormGroup>
);

const TryItOut = () => (
	<FormGroup
		legend={text(
			"Legend",
			"Are you happy for us to contact you in the future?"
		)}
		hint={text("Hint", "We promise not to contact you too often!")}
		groupError={text("Error", "Please chooose an option")}
		inline={boolean("Inline")}
	>
		<Radio value="Yes" checked />
		<Radio value="No" />
		<Radio value="Maybe" />
	</FormGroup>
);

storiesOf("Form Group", module)
	.add("Default", Default)
	.add("Inline", Inline)
	.add("Error", Error)
	.add("Hint", Hint)
	.add("No Legend", NoLegend)
	.add("Try it out", TryItOut);
