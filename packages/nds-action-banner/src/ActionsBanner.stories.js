import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import ActionBanner from "./ActionBanner";

storiesOf("Action banner", module)
	.addDecorator(withKnobs)
	.add("Default", () => {
		return <ActionBanner title="Default action banner" closeable="true">
			This is <a href="#">some content with a link</a>
		</ActionBanner>;
	})
	.add("Subtle", () => {
		return <ActionBanner modifier="subtle" title="Subtle action banner" closeable="true">
			This is <a href="#">some content with a link</a>
		</ActionBanner>;
	})
	.add("Customisable", () => {

		const ctaModifiers = {
			Default: "",
			Inverse: "inverse",
			Secondary: "secondary",
			CTA: "cta"
		};
		const ctaType = select("CTA type", ctaModifiers, "inverse", "CTA");
		const ctaText = text("CTA text", "Do the thing", "CTA");
		const cta = <a href="#" className={`btn btn--${ctaType}`}>{ctaText}</a>;

		const bannerModifiers = {
			Default: "",
			Subtle: "subtle"
		};

		return <ActionBanner
			modifier={select("Class modifier", bannerModifiers, "", "Banner")}
			title={text("Title", "Customisable action banner", "Banner")}
			closeable={boolean("Closeable", true, "Banner")}
			cta={cta}>
			{text("Content", "This is some content for the banner message", "Banner")}
		</ActionBanner>;
	});
