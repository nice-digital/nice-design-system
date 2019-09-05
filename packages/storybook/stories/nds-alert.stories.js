/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import { Alert } from "@nice-digital/nds-alert";

storiesOf("Alert", module).add("Try it out", () => (
	<Alert type={select("Type", ["info", "success", "error", "caution"])}></Alert>
));
