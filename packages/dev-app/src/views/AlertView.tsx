import React from "react";
import { Alert } from "@nice-digital/nds-alert";
import { Tag } from "@nice-digital/nds-tag";

export const AlertView = () => {
	return (
		<>
			<Alert>
				<h3>Alert title</h3>
				<Tag error info>HellO!</Tag>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
					inventore maxime repellendus dolorem incidunt tempora a aspernatur
					sapiente quas quidem quia dolores, molestiae, accusamus, libero dicta!
					Explicabo recusandae, exercitationem iure ad asperiores tenetur
					quaerat, animi in quae numquam velit nostrum!
				</p>
			</Alert>
		</>
	);
};
