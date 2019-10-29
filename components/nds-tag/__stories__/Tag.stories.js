import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Tag from "../src/Tag";

storiesOf("Tag", module)
	.addDecorator(withKnobs)
	.add("Customisable", () => {
		return <p>Here is an inline
			<Tag modifier={select("Class modifier", ["alpha", "beta"])}>
				{text("Text", "tag")}
			</Tag> that you can use.</p>;
	});
