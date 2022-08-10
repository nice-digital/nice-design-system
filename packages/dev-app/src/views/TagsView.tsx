import React from "react";
import { Tag } from "@nice-digital/nds-tag";

export const TagsView = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start"
			}}
		>
			<Tag alpha>Alpha</Tag>
			<Tag beta>Beta</Tag>
			<Tag caution>Caution</Tag>
			<Tag consultation>Consultation</Tag>
			<Tag error>Error</Tag>
			<Tag info>Info</Tag>
			<Tag isNew>New</Tag>
			<Tag success>Success</Tag>
			<Tag updated>Updated</Tag>
		</div>
	);
};
