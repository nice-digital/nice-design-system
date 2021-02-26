import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Callout } from "@nice-digital/nds-callout";

storiesOf("Components/Callout", module)
	.addDecorator(withKnobs)
	.add("Customisable", () => (
		<Callout
			image={{
				src:
					"https://www.nice.org.uk/Media/Default/HOMEPAGE%20ICONS/take-our-survey.png",
				alt: "blnk",
				className: "monkey",
				"aria-label": "an aria label thank you"
			}}
			title={{
				elementType: "h4",
				text: "This is a title right here - who knows how long it might be",
				destination: "#monkey",
				"aria-label":
					"not everything needs an aria label but let's pretend it does"
			}}
		>
			<p>Get to grips with these top tips on cooking Chili</p>
		</Callout>
	));
