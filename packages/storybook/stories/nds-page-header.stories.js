/* eslint react/prop-types: 0 */

import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { Button } from "@nice-digital/nds-button";
import { PageHeader } from "@nice-digital/nds-page-header";

const Heading = () => <PageHeader heading="Systemic lupus erythematosus" />;

const Preheading = () => (
	<PageHeader heading="Products" preheading="Systemic lupus erythematosus" />
);

const Lead = () => (
	<PageHeader
		heading="Systemic lupus erythematosus"
		lead="A list of all our products on systemic lupus erythematosus"
	/>
);

const CtaButton = <Button>Find out more about this topic</Button>;

const CTA = () => (
	<PageHeader heading="Systemic lupus erythematosus" cta={CtaButton} />
);

const Customise = () => (
	<PageHeader
		heading={text("Heading", "Products")}
		preheading={text("Pre-heading", "Systemic lupus erythematosus")}
		lead={text(
			"Lead",
			"A list of all our products on systemic lupus erythematosus"
		)}
		cta={
			<Button>
				{text("Call-to-action", "Find out more about this topic")}
			</Button>
		}
	/>
);

storiesOf("Page Header", module)
	.add("Heading", Heading)
	.add("Pre-heading", Preheading)
	.add("Lead", Lead)
	.add("Call-to-action", CTA)
	.add("Try it out", Customise);
