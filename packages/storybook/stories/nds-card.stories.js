/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Card } from "@nice-digital/nds-card";
import { Tag } from "@nice-digital/nds-tag";

const ListWrapper = props => (
	<ul className="list--unstyled">{props.children}</ul>
);

const FakeLink = props => {
	return (
		<a className="non-standard-link-type-example" {...props}>
			{props.children}
		</a>
	);
};

const headingOnly = () => {
	const props = {
		headingText: "Hello there"
	};
	return (
		<ListWrapper>
			<Card {...props} />
		</ListWrapper>
	);
};

const headingOnlyLink = () => {
	const props = {
		headingText: "Hello there",
		elementType: "h1",
		link: {
			destination: "/",
			elementType: "a"
		}
	};
	return (
		<ListWrapper>
			<Card {...props} />
		</ListWrapper>
	);
};

const nonAnchorLink = () => {
	const props = {
		headingText: "This card has a custom link tag",
		elementType: "h3",
		link: {
			destination: "/test",
			elementType: FakeLink
		}
	};
	return (
		<ListWrapper>
			<Card {...props} />
		</ListWrapper>
	);
};

const fullCardWithComponentMeta = () => {
	const props = {
		headingText: "Full card with component in metadata",
		metadata: [
			{
				value: <Tag alpha>Component as value</Tag>
			},
			{
				value: "just a label"
			},
			{
				label: "Email address",
				value: "value with a label"
			}
		]
	};
	return (
		<ListWrapper>
			<Card {...props}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
					accusantium assumenda blanditiis culpa in nesciunt optio quibusdam
					sunt voluptatum. Aut blanditiis ex excepturi pariatur porro provident
					quos repellat tempora. Voluptas?
				</p>
			</Card>
		</ListWrapper>
	);
};

const imageAndSummary = () => {
	const fullProps = {
		headingText: "Image and summary"
	};
	return (
		<ListWrapper>
			<Card
				{...fullProps}
				image={
					<img
						src="http://placehold.it/200x200?text=image"
						alt="Some engaging alt text"
					/>
				}
			>
				<p>Any children passed to the card will be rendered as a summary.</p>
			</Card>
		</ListWrapper>
	);
};

const customisable = () => {
	return (
		<ListWrapper>
			<Card
				headingText={text("headingText", "Card heading text", "Heading")}
				elementType={text("elementType", "article" || "article", "Heading")}
				link={{
					destination: text("link.destination", "/about/", "Heading"),
					elementType: text("link.elementType", "a" || "a", "Heading")
				}}
				metadata={[
					{
						label: text("Metadata 1 label", "Label", "Metadata"),
						value: text("Metadata 1 value", "Value", "Metadata")
					},
					{
						label: text("Metadata 2 label", "Label", "Metadata"),
						value: text("Metadata 2 value", "Value", "Metadata")
					}
				]}
			>
				<p>
					{text(
						"Summary",
						"Summary text (wrapped in a p tag for the purpose of demonstration).",
						"Summary"
					)}
				</p>
			</Card>
		</ListWrapper>
	);
};

storiesOf("Card", module)
	.addDecorator(withKnobs)
	.add("Heading only, no link", headingOnly)
	.add("H1 heading with link", headingOnlyLink)
	.add("Custom link type", nonAnchorLink)
	.add("Image and summary", imageAndSummary)
	.add("Full card with added component in metadata", fullCardWithComponentMeta)
	.add("Customisable", customisable);
