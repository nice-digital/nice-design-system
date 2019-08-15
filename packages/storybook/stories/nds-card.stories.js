/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";

import { Card } from "@nice-digital/nds-card";

const ListWrapper = (props) => (
	<ul className="list--unstyled">{props.children}</ul>
);

const FakeLink = (props) => {
	return (
		<fakelink className="fakelink" {...props}>
			{props.children}
		</fakelink>
	)
};

// const allProps = () => {
// 	const data = {
// 		title: "Card Title",
// 		link: "/destination/",
// 		metadata: [
// 			{
// 				label: "name",
// 				value: "Warren"
// 			},
// 			{
// 				label: "age",
// 				value: "39"
// 			},
// 			{
// 				label: "hobbies",
// 				value: "games"
// 			},
// 			{
// 				hidden: false,
// 				label: <span>hello</span>,
// 				value: <img />
// 			}
// 		]
// 	};
// 	return (
// 		<ListWrapper>
// 			<Card {...data}/>
// 			<Card {...data}/>
// 			<Card {...data}/>
// 		</ListWrapper>
// 	);
// };

// const noLink = () => {
// 	const data = {
// 		title: "Card Title",
// 		metadata: [
// 			{
// 				label: "name",
// 				value: "Warren"
// 			},
// 			{
// 				label: "age",
// 				value: "39"
// 			},
// 			{
// 				label: "hobbies",
// 				value: "games"
// 			}
// 		]
// 	};
// 	return (
// 		<ListWrapper>
// 			<Card {...data}/>
// 			<Card {...data}/>
// 			<Card {...data}/>
// 		</ListWrapper>
// 	);

// };

// const h1 = ({children, ...rest}) => <h1 {...rest}>{children}</h1>;

// const noMeta = () => {
// 	const data = {
// 		title: "John",
// 		link: <a monkey="gothere">Go</a>,
// 		headerTag: h1
// 	};
// 	return (
// 		<Card

// 		/>
// 	);
// };

const componentProps = () => {
	const headingProps = {
		headingText: "Hello there",
		destination: "/test",
		linkType: FakeLink,
		headerTag: "h3"
	};
	const metaProps = {};
	return (
		<ListWrapper>
			<Card heading={headingProps} meta={metaProps} />
		</ListWrapper>
	);
};

const componentProps2 = () => {
	const headingProps = {
		headingText: "Hello",
		destination: "/test",
		linkType: "a",
		headerTag: "h3"
	};
	const metaProps = {};
	return (
		<Card heading={headingProps} meta={metaProps} />
	);
};

storiesOf("Card", module)
	// .add("Title with link and metadata", allProps)
	// .add("Title without link, with metadata", noLink)
	// .add("Only title and link", noMeta)
	.add("type 1", componentProps)
	.add("type 2", componentProps2);


