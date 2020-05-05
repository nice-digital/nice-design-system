/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { Input, Textarea } from "@nice-digital/nds-forms";

const CheckboxDefault = () => (
	<div>
		<Input name="firstname" label="First name" unique="firstname"/>
		<Textarea label="Description" name="description"/>
	</div>
);

storiesOf("Forms", module)
	.add("Default", CheckboxDefault);
