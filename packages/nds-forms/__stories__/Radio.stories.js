import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import Radio from "../src/Radio";

const basic = () => {
	return (
		<Fragment>
			<Radio name="group">Option 1</Radio>
			<Radio name="group">Option 2</Radio>
		</Fragment>
	);
};

const checked = () => {
	return (
		<Fragment>
			<Radio name="group">Option 1</Radio>
			<Radio name="group" checked={true}>Option 2</Radio>
		</Fragment>
	);
};

const disabled = () => {
	return (
		<Fragment>
			<Radio name="group">Option 1</Radio>
			<Radio name="group" disabled="disabled">Option 2</Radio>
			<Radio name="group">Option 3</Radio>
		</Fragment>
	);
};

storiesOf("Radio", module)
	.addDecorator(withKnobs)
	.add("Basic", basic)
	.add("Checked", checked)
	.add("Disabled", disabled);

