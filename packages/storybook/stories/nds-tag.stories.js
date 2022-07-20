import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import { Tag } from "@nice-digital/nds-tag";

storiesOf("Foundations/Tag", module)
	.add("Removeable", () => {
		return (
			<Tag
				outline
				remove={
					<a href="#" className="test">
						Remove this tag
					</a>
				}
			>
				Some tag text
			</Tag>
		);
	})
	.add("Try it out", () => {
		const variant = select("Variant", Tag.variants);
		const props = {
			[variant]: true
		};
		return <Tag {...props}>{text("Text", "Try it out")}</Tag>;
	});
