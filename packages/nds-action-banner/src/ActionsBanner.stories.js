import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ActionBanner from "./ActionBanner";

storiesOf("Action banner", module)
	.addDecorator(withKnobs)
	.add("Primary", () => <ActionBanner />);
