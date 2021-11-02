import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { PhaseBanner } from "@nice-digital/nds-phase-banner";

const TryItOut = () => {
	const props = {
		[select("Stage", ["alpha", "beta"], "alpha")]: true
	};
	return (
		<PhaseBanner {...props}>
			{text(
				"Text",
				"This is a new service - your feedback will help us to improve it."
			)}
		</PhaseBanner>
	);
};

storiesOf("Components/Phase Banner", module).add("Try it out", TryItOut);
