import React from "react";

import { storiesOf } from "@storybook/react";

import Panel from "./Panel";

storiesOf("Panel", module)
	.add("Default", () => (
		<Panel>
			This is some panel content
		</Panel>
	));
