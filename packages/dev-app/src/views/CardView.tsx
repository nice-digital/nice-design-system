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

const image = (
	<span>
		<img
			src="http://placehold.it/200x200"
			alt="placeholder"
			className="monkey"
		/>
	</span>
);

const image2 = (
	<div>
		<span>
			<div>
				<span>
					<div>
						<img
							src="http://placehold.it/200x200"
							alt="hey"
							className="dont-get-rid-of-me"
						/>
					</div>
				</span>
			</div>
		</span>
	</div>
);

const image3 = <img src="http://placehold.it/200x200" alt="placeholder" />;

export const CardView = () => {
	return (
		<ul className={"list--unstyled"}>
			<Card {...props} data-qa-selector="cardy" summary="This is a paragraph" />

			<Card {...props} image={image2} data-qa-selector="cardy" />
			<Card {...props} image={image3} data-qa-selector="cardy" />
			<Card {...props} image={image3} summary="Is this in a paragraph?" />
			<Card
				headingText="Card title"
				summary={
					<span>
						My <b>lightly formatted</b> summary
					</span>
				}
			/>
		</ul>
	);
};
