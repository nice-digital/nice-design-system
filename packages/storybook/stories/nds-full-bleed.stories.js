import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { FullBleed } from "@nice-digital/nds-full-bleed";
import { Grid, GridItem } from "@nice-digital/nds-grid";

const NoOptions = () => (
	<FullBleed>
		<p>Any markup can go inside the container, but you'll need a container</p>
	</FullBleed>
);

const Customise = () => (
	<FullBleed
		light={boolean("Light version", false)}
		backgroundImage={text(
			"Background image URL (remove URL for solid background)",
			"https://images.unsplash.com/photo-1591398834690-54927a83deba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
		)}
		padding={select("Padding", ["small", "medium", "large"], "small")}
	>
		<div className="container">
			<Grid>
				<GridItem cols={12}>
					<h1>This is a title</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, amet
						blanditiis cupiditate deleniti distinctio eaque eius explicabo harum
						iusto maxime neque nisi nobis officiis placeat quam quasi reiciendis
						rerum.
					</p>
				</GridItem>
			</Grid>
		</div>
	</FullBleed>
);

storiesOf("Components/Full Bleed", module)
	.add("Default", NoOptions)
	.add("Try it out", Customise);
