/* eslint react/prop-types: 0 */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Container } from "@nice-digital/nds-container";

storiesOf("Foundations/Container", module)
	.add("Default", () => {
		return (
			<Container>
				<h1>Standard container</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
					rem.
				</p>
			</Container>
		);
	})
	.add("Full Width", () => {
		return (
			<Container fullWidth={true}>
				<h1>Full width container</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
					rem.
				</p>
			</Container>
		);
	});
