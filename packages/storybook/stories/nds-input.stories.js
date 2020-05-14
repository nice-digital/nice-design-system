/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { Input } from "@nice-digital/nds-input";

const Basic = () => <Input label="First Name" name="firstname" />;
const Hint = () => (
	<Input
		label="First Name"
		name="firstname"
		hint="Only enter your first name"
		defaultValue="Already populated"
	/>
);
const Error = () => (
	<Input
		label="First Name"
		name="firstname"
		error={true}
		errorMessage="There is an error in this field"
	/>
);
const TryItOut = () => (
	<Input
		name="firstname"
		label={text("Label", "First Name")}
		errorMessage={text("Error message", "There was a problem with this field")}
		error={boolean("Error")}
		hint={text("Hint", "Only enter your first name")}
	/>
);

storiesOf("Input", module)
	.add("Basic", Basic)
	.add("Hint", Hint)
	.add("Error", Error)
	.add("Try it out", TryItOut);
