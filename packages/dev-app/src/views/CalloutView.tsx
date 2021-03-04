import React from "react";
import { Callout, CalloutImage, CalloutBody } from "@nice-digital/nds-callout";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import monkey from "./assets/monkey.jpg";

export const CalloutView = () => {
	return (
		<div style={{ background: "rebeccapurple", padding: "2rem" }}>
			<Grid gutter={"loose"}>
				<GridItem cols={12} md={4} sm={6}>
					<Callout>
						<CalloutImage>
							<img src={monkey} alt="Monkey on a penny-farthing" />
						</CalloutImage>
						<CalloutBody>
							<h2 className="h4">
								<a href="#link">This is the title</a>
							</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Accusantium dignissimos ex, excepturi in ipsam non quia quidem
								quo rem voluptas.
							</p>
						</CalloutBody>
					</Callout>
				</GridItem>
			</Grid>
		</div>
	);
};
