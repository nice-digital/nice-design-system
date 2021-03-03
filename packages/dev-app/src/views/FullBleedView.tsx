import React from "react";
import { FullBleed } from "@nice-digital/nds-full-bleed";

export const FullBleedView = () => {
	return (
		<>
			<p>there's a paragraph here</p>
			<FullBleed
			// backgroundImage={<img alt="" src="https://placehold.it/200x200" />}
			>
				<div className="container">
					<h3 className="mt--0">Alert title</h3>
					<p className="mb--0">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
						inventore maxime repellendus dolorem incidunt tempora a aspernatur
						sapiente quas quidem quia dolores, molestiae, accusamus, libero
						dicta! Explicabo recusandae, exercitationem iure ad asperiores
						tenetur quaerat, animi in quae numquam velit nostrum!
					</p>
				</div>
			</FullBleed>
			<p>and a paragraph here</p>
		</>
	);
};
