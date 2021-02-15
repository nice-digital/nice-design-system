import React from "react";
import { PrevNext } from "@nice-digital/nds-prev-next";

const Template = args => <PrevNext {...args} />;

export const Standard = Template.bind({});

Standard.args = {
	nextPageLink: {
		text: "Next page here",
		destination: "#",
		intro: "Custom next page text"
	},
	previousPageLink: {
		text: "Previous page here",
		destination: "#"
	},
	className: ""
};

export default {
	title: "Components/Previous and Next",
	component: PrevNext
	// Can't do this yet
	// argTypes: {
	// 	className: { control: "text" },
	// 	nextPageLink: {
	// 		text: { control: "text" },
	// 		destination: { control: "text" },
	// 		intro: { control: "text" }
	// 	},
	// 	previousPageLink: {
	// 		text: { control: "text" },
	// 		destination: { control: "text" },
	// 		intro: { control: "text" }
	// 	}
	// }
};
