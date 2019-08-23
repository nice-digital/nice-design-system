import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Button } from "@nice-digital/nds-button";

storiesOf("Button", module)
	.addDecorator(withKnobs)
	.add("CTA", () => <Button variant="cta">CTA button</Button>)
	.add("Primary", () => <Button>Primary button</Button>)
	.add("Secondary", () => <Button variant="secondary">Secondary button</Button>)
	.add("Inverse", () => <Button variant="inverse">Inverse button</Button>)
	.add("Anchor", () => <Button to="/test-url">Anchor</Button>)
	.add("Customisable", () => (
		<Button
			onClick={action("Button click")}
			variant={select(
				"Class modifier",
				Button.variants,
				Button.variants.primary
			)}
			type={select("Type", Button.types, Button.types.button)}
			to={text("Anchor href", "/a-url-here")}
		>
			{text("Button text", "With click action")}
		</Button>
	));
