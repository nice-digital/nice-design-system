import React from "react";

import { storiesOf } from "@storybook/react";

import { Radio } from "@nice-digital/nds-radio";

const RadioDefault = () => (
	<div>
		<Radio label="Yes" />
	</div>
);

storiesOf("Radio", module).add("default", RadioDefault);
