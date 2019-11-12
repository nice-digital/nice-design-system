import React from "react";
import Layout from "../components/layout";
import { Hero } from "@nice-digital/nds-hero";
import { Link } from "gatsby";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout>
		<SEO title="Welcome" />
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
	</Layout>
);

export default IndexPage;
