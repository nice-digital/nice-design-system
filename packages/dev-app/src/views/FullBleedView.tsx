import React from "react";
import { FullBleed } from "@nice-digital/nds-full-bleed";

export const FullBleedView = () => {
	return (
		<>
			<p>there's a paragraph here</p>
			<FullBleed
				className="monkey"
				padding="large"
				light={true}
				backgroundImage="https://images.unsplash.com/photo-1591398834690-54927a83deba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
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
