import React from "react";
import { Card, CardProps } from "@nice-digital/nds-card";

const props: CardProps = {
	headingText: "Hello",
	elementType: "h1",
	link: {
		destination: "/about",
		elementType: "a"
	},
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
		<>
			<Card {...props} />
		</>
	);
};
