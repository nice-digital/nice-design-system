import React from "react";
import { Callout, Image, Body } from "@nice-digital/nds-callout";
import { Link } from "react-router-dom";
import { Grid, GridItem } from "@nice-digital/nds-grid";

export const CalloutView = () => {
	return (
		<div style={{ background: "rebeccapurple", padding: "2rem" }}>
			<Grid gutter={"loose"}>
				<GridItem cols={12} md={4} sm={6}>
					<Callout>
						<Image
							className="monkey"
							aria-label="Nice little label"
							alt="Monkey on a penny-farthing"
							src="https://img0.etsystatic.com/026/0/9057164/il_570xN.588029362_ntdd.jpg"
						/>
						<Body>
							<h2 className="h4">
								<a href="#hello">
									NICE published some guidance and what happened next left
									doctors reeling!
								</a>
							</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Accusantium dignissimos ex, excepturi in ipsam non quia quidem
								quo rem voluptas.
							</p>
						</Body>
					</Callout>
				</GridItem>
			</Grid>
		</div>
	);
};
