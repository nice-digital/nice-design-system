/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import { Checkbox } from "@nice-digital/nds-checkbox";

const CheckboxDefault = () => <div></div>;

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

storiesOf("Radio", module)
	.add("Default", CheckboxDefault)
	.add("Try it out", CheckboxCustomise);
