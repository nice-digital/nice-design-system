import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Breadcrumbs from "../src/Breadcrumbs";

storiesOf("Breadcrumbs", module)
	.addDecorator(withKnobs)
	.add("Primary", () => <Breadcrumbs />);
