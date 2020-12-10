import React from "react";
import { Hero } from "@nice-digital/nds-hero";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import Wrapper from "../components/layouts/Wrapper";

export default function IndexPage() {
	return (
		<Wrapper>
			<Seo title="NICE Design System" />
			<Hero
				title="NICE Design System"
				intro="Your source for quickly creating consistent on-brand NICE digital services"
			>
				<h2 className="h4">Quick links</h2>
				<ul className="list list--unstyled list--loose">
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</Hero>

			<Grid>
				<GridItem cols={12}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
						aperiam, aut dicta dignissimos dolorem doloremque doloribus ducimus,
						obcaecati provident qui repudiandae soluta, voluptate! Ab amet, eius
						ipsa nostrum recusandae voluptas?
					</p>
				</GridItem>
			</Grid>
		</Wrapper>
	);
}
