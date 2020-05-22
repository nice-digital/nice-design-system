import React from "react";
import { Card, CardProps } from "@nice-digital/nds-card";

const props: CardProps = {
	elementType: "li",
	headingText: "Hey",
	headingElementType: "h1",
	link: {
		destination: "/about",
		elementType: "a"
	},
	image: <img src="http://placehold.it/200x200" alt="placeholder image" />,
	metadata: [
		{
			label: "email",
			value: "me@example.com"
		},
		{
			label: "phone",
			value: "0123 123 1234"
		}
	]
};

export const CardView = () => {
	return (
		<ul className={"list--unstyled"}>
			<Card {...props} data-qa-selector="cardy">
				<p>
					This is a <b>paragraph</b>
				</p>
			</Card>
			<Card {...props} data-qa-selector="cardy">
				<p>This is a paragraph</p>
			</Card>
			<Card {...props} data-qa-selector="cardy">
				<p>This is a paragraph</p>
			</Card>
		</ul>
	);
};
