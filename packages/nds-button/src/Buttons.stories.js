import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

storiesOf("Button", module)
	.addDecorator(withKnobs)
	.add("Primary", () => <Button>Primary button</Button>)
	.add("Secondary", () => <Button modifier="secondary">Secondary button</Button>)
	.add("CTA", () => <Button modifier="cta">CTA button</Button>)
	.add("Anchor", () => <Button type="anchor" href="/test-url" modifier="cta">Anchor</Button>)
	.add("Customisable", () => {

		const modifiers = {
			Default: "",
			Secondary: "secondary",
			CTA: "cta",
			Inverse: "inverse"
		};

		const types = {
			Default: "",
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
