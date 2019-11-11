import React from "react";
import { Hero } from "@nice-digital/nds-hero";

const IndexPage = () => (
	<div>
		<Hero title="NICE Design System" intro="If you build it, they will come">
			<ul className="list--unstyled">
				<li>
					<a href="#">About the system</a>
				</li>
				<li>
					<a href="#">How to use</a>
				</li>
				<li>
					<a href="#">Feedback &amp; contributing</a>
				</li>
			</ul>
		</Hero>
		<p>It might work one day...</p>
	</div>
);

export default IndexPage;
