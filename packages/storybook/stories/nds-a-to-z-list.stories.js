import React from "react";

import { storiesOf } from "@storybook/react";

import { AToZList } from "../../../components/nds-a-to-z-list/src/AToZList";

const ListItems = () => (
	<>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
		<li>Four</li>
		<li>Five</li>
		<li>Six</li>
	</>
);

storiesOf("Components/A-to-Z list", module).add("Default", () => <AToZList />);
