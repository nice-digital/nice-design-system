/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { Input, Textarea } from "@nice-digital/nds-forms";
import { FormGroup } from "@nice-digital/nds-form-group";

const InputComponent = () => (
	<Input
		error={boolean("Error state")}
		errorMessage={text("Error message", "This field is required")}
		label={text("label", "First name")}
		name="firstname"
		unique="firstname"
	/>
);

const TextareaComponent = () => (
	<Textarea
		error={boolean("Error state")}
		errorMessage={text("Error message", "This field is required")}
		label={text("label", "Description")}
		unique="description"
	/>
);

storiesOf("Forms", module)
	.add("Input - try it out", InputComponent)
	.add("Textarea - try it out", TextareaComponent);
