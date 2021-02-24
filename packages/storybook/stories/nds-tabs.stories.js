import React from "react";

import { storiesOf } from "@storybook/react";

import { Tabs, Tab } from "@nice-digital/nds-tabs";

storiesOf("Components/Tabs", module).add("Default", () => (
	<Tabs>
		<Tab title="Tab 1">
			<p>Here is some content for the first tab</p>
		</Tab>
		<Tab title="Tab 2">
			<p>Here is some content for the second tab</p>
		</Tab>
		<Tab title="Tab 3">
			<p>Here is some content for the third tab</p>
		</Tab>
	</Tabs>
));
