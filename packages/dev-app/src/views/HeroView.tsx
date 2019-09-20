import React from "react";
import { Hero } from "@nice-digital/nds-hero";
import { Button } from "@nice-digital/nds-button";

const Cta = () => <Button variant="cta">Hello!</Button>;

export const HeroView = () => {
	return (
		<>
			<Hero
				title="This is the title"
				intro="This is a hero intro"
				actions={<Cta />}
			>
				<h2 className="h4">Quick Links</h2>
				<ul className="list--unstyled">
					<li>
						<a href="#">One</a>
					</li>
					<li>
						<a href="#">Two</a>
					</li>
					<li>
						<a href="#">Three</a>
					</li>
				</ul>
			</Hero>
		</>
	);
};
