import React from "react";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { PrevNext } from "@nice-digital/nds-prev-next";

const TryItOut = () => (
	<PrevNext
		nextPageLink={{
			text: text("Text", "To the next page", "Next page link"),
			destination: text("Destination", "#", "Next page link"),
			intro: text("Intro", "Next page", "Next page link")
		}}
		previousPageLink={{
			text: text("Text", "To the previous page", "Previous page link"),
			destination: text("Destination", "#", "Previous page link"),
			intro: text("Intro", "Previous page", "Previous page link")
		}}
		className={text("Additional classes", "", "Other")}
	/>
);

storiesOf("Components/Previous & Next", module).add("Try it out", TryItOut);
