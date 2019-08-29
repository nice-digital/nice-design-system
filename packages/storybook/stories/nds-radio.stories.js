/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import { Radio } from "@nice-digital/nds-radio";

const RadioDefault = () => (
	<div>
		<Radio label="Yes, please." value="yes" group="my-group" />
		<Radio label="No, thank you." value="no" group="my-group" defaultChecked />
	</div>
);

const RadioError = () => (
	<Radio value="error" label="Error!" error={true} group="my-group" />
);

const RadioDisabled = () => (
	<Radio value="disabled" label="Disabled!" disabled={true} group="my-group" />
);

const RadioInline = () => (
	<div>
		<Radio value="yes" label="Yes, please." group="my-group" inline={true} />
		<Radio value="no" label="No, thank you." group="my-group" inline={true} />
	</div>
);

const RadioCustomise = () => (
	<div>
		<Radio
			value="yes"
			label="Yes, please."
			group="my-group"
			inline={boolean("Inline")}
		/>
		<Radio
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
	.add("Default", RadioDefault)
	.add("Error", RadioError)
	.add("Disabled", RadioDisabled)
	.add("Inline", RadioInline)
	.add("Try it out", RadioCustomise);
