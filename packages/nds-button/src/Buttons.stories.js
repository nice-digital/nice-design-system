import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

storiesOf("Button", module)
	.addDecorator(withKnobs)
	.add("Primary", () => <Button text="Primary button" />)
	.add("Secondary", () => <Button text="Secondary button" modifier="secondary" />)
	.add("CTA", () => <Button text="CTA button" modifier="cta" />)
	.add("Customisable", () => {

		const modifiers = {
			Default: "",
			Secondary: "secondary",
			CTA: "cta"
		};

		const types = {
			Default: "button",
			Anchor: "anchor",
			Submit: "submit",
			Reset: "reset"
		};

		const content = text("Button text", "With click action");
		return <Button
			onClick={action("Button click")}
			modifier={select("Class modifier", modifiers, "")}
			type={select("Type", types, "")}
			href={text("Anchor href", "/a-url-here")}>
			{content}
		</Button>;
	});
