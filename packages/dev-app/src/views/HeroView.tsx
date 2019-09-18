import React from "react";
import { Hero } from "@nice-digital/nds-hero";
import { Button } from "@nice-digital/nds-button";

const Cta = () => <Button variant="cta">Hello!</Button>;

const Extra = (
	<>
		<h2 className="h4">Extras column</h2>
		<ul>
			<li>A list item</li>
			<li>Another list item</li>
			<li>
				<a href="#">A link</a>
			</li>
		</ul>
	</>
);

export const HeroView = () => {
	return (
		<>
			<Hero
				title="This is the title"
				intro="This is a hero intro that should explain in a few words what the
				site is about"
				actions={<Cta />}
				extra={Extra}
			/>
		</>
	);
};
