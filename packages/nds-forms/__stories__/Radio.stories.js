import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import Radio from "../src/Radio";
import RadioGroup from "../src/RadioGroup";

const basic = () => {
	return (
		<RadioGroup
			legend="Radio buttons (stacked, default)"
			group="group-1"
			hint="This is some hint text you can read">
			<Radio error value="yes" label="Yes please!" data-track="no"/>
			<Radio value="no" label="No thanks!"/>
			<Radio value="maybe" label="Well maybe..? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo, facere harum necessitatibus nulla optio pariatur rem! Aut blanditiis dolores expedita minima mollitia nostrum rem! Accusamus aliquid, distinctio facilis harum illum magni nemo pariatur provident sequi vel, voluptates voluptatum!"/>
		</RadioGroup>
	);
};

const inline = () => {
	return (
		<RadioGroup legend="Radio buttons (inline)" group="group-2" hint="This is some hint text you can read" inline>
			<Radio value="yes" label="Yes please!"/>
			<Radio value="no" label="No thanks!"/>
			<Radio value="maybe" label="Well maybe..?"/>
		</RadioGroup>
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
	.add("Inline", inline)
	.add("Disabled", disabled);

