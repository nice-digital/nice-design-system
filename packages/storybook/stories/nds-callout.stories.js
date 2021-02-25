import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Callout } from "@nice-digital/nds-callout";

storiesOf("Components/Callout", module)
	.addDecorator(withKnobs)
	.add("Customisable", () => (
		<Callout>{text("Callout text", "Hello")}</Callout>
	));
