import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Callout, CalloutBody, CalloutImage } from "@nice-digital/nds-callout";

const callouts = [
	{
		title: "Article one with a shortish title",
		text:
			"Consequuntur est iure quis sapiente? Animi, asperiores atque commodi corporis cum delectus deserunt eveniet fugiat fugit id in inventore magnam magni maiores molestiae natus nesciunt, Officia praesentium quae quidem repellendus repudiandae sed sunt tempora totam unde."
	},
	{
		title: "Article one with a longish title that goes on a bit",
		text: "Consequuntur est iure quis sapiente?"
	},
	{
		title: "Very short!",
		text:
			"Consequuntur est iure quis sapiente? Animi, asperiores atque commodi corporis cum delectus deserunt eveniet fugiat fugit id in inventore magnam magni maiores molestiae natus nesciunt, Officia praesentium quae quidem repellendus repudiandae sed sunt tempora totam unde. Animi, asperiores atque commodi corporis cum delectus deserunt eveniet fugiat fugit id in inventore magnam magni maiores molestiae natus nesciunt, Officia praesentium quae quidem repellendus repudiandae sed sunt tempora totam unde."
	}
];

storiesOf("Components/Callout", module)
	.addDecorator(withKnobs)
	.add("Default (unrestricted width)", () => (
		<Callout>
			<CalloutImage>
				<img src="https://placehold.it/800x450?text=Callout" alt={""} />
			</CalloutImage>
			<CalloutBody>
				<h2 className="h4">
					<a href="#link">This is is the title</a>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
					dignissimos ex, excepturi in ipsam non quia quidem quo rem voluptas.
				</p>
			</CalloutBody>
		</Callout>
	))
	.add("Three various sizes, in grid", () => {
		return (
			<Grid>
				{callouts.map((item, index) => {
					return (
						<GridItem key={item.title} cols={12} md={4} sm={6}>
							<Callout>
								<CalloutImage>
									<img
										alt={item.title}
										src={`https://placehold.it/800x450?text=Callout ${index +
											1}`}
									/>
								</CalloutImage>
								<CalloutBody>
									<h2 className="h4">
										<a href="#hello"> {item.title}</a>
									</h2>
									<p>{item.text}</p>
								</CalloutBody>
							</Callout>
						</GridItem>
					);
				})}
			</Grid>
		);
	})
	.add("Try it out", () => {
		return (
			<Grid>
				<GridItem
					cols={8}
					push={2}
					md={{ cols: 4, push: 4 }}
					sm={{ cols: 6, push: 3 }}
				>
					<Callout>
						<CalloutImage>
							<img
								alt=""
								src={text(
									"Image source",
									"https://placehold.it/800x450?text=Callout"
								)}
							/>
						</CalloutImage>
						<CalloutBody>
							<h2 className="h4">
								<a
									rel="noopener noreferrer"
									target="_blank"
									href={text("Link destination", "https://www.nice.org.uk")}
								>
									{text("Link text", "This is the title")}
								</a>
							</h2>
							<p>
								{text(
									"Extra paragraph",
									"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, facilis."
								)}
							</p>
						</CalloutBody>
					</Callout>
				</GridItem>
			</Grid>
		);
	});
