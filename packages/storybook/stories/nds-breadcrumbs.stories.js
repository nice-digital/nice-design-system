/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

const homeOnly = () => {
	return (
		<Breadcrumbs>
			<Breadcrumb to="https://www.nice.org.uk">NICE</Breadcrumb>
		</Breadcrumbs>
	);
};

const twoLevels = () => {
	return (
		<Breadcrumbs>
			<Breadcrumb to="https://www.nice.org.uk">NICE</Breadcrumb>
			<Breadcrumb>CKS</Breadcrumb>
		</Breadcrumbs>
	);
};

const CustomLink = props => (
	<a
		href={props.to}
		onClick={e => {
			e.preventDefault();
			action("Clicked " + props.to)();
		}}
	>
		{props.children}
	</a>
);

const customTag = () => {
	return (
		<Breadcrumbs>
			<Breadcrumb to="https://www.nice.org.uk" elementType={CustomLink}>
				NICE
			</Breadcrumb>
			<Breadcrumb>CKS</Breadcrumb>
		</Breadcrumbs>
	);
};

storiesOf("Components/Breadcrumbs", module)
	.add("Home only", homeOnly)
	.add("Two levels", twoLevels)
	.add("Custom link tag", customTag);
