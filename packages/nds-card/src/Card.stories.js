import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Card from "./Card";

storiesOf("Card", module)
	.addDecorator(withKnobs)
	.add("Primary", () => <Card />);
