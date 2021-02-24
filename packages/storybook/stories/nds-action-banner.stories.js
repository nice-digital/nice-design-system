import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { ActionBanner } from "@nice-digital/nds-action-banner";
import { Button } from "@nice-digital/nds-button";

storiesOf("Components/Action banner", module)
	.addDecorator(withKnobs)
	.add("Default", () => {
		return (
			<ActionBanner
				title="Default action banner"
				cta={<Button variant="cta">A CTA</Button>}
			>
				This is <a href="#">some content with a link</a>
			</ActionBanner>
		);
	})
	.add("Subtle", () => {
		return (
			<ActionBanner
				variant="subtle"
				title="Subtle action banner"
				cta={<Button>A button</Button>}
			>
				This is <a href="#">some content with a link</a>
			</ActionBanner>
		);
	})
	.add("Closeable", () => {
		return (
			<ActionBanner
				title="Closeable action banner"
				cta={<Button variant="cta">A CTA</Button>}
				onClosing={action("Closing")}
			>
				This is a closeable action banner.
			</ActionBanner>
		);
	})
	.add("Customisable", () => {
		const ctaButton = (
			<Button
				variant={select(
					"CTA button variant",
					Button.variants,
					Button.variants.cta,
					"CTA"
				)}
			>
				{text("CTA text", "Do the thing", "CTA")}
			</Button>
		);

		const bannerVariants = {
			Default: null,
			Subtle: "subtle"
		};

		return (
			<ActionBanner
				variant={select("Variant", bannerVariants, null, "Banner")}
				title={text("Title", "Customisable action banner", "Banner")}
				onClosing={
					boolean("Closeable", false, "Banner") ? action("Closing") : null
				}
				cta={ctaButton}
			>
				{text(
					"Content",
					"This is some content for the banner message",
					"Banner"
				)}
			</ActionBanner>
		);
	});
