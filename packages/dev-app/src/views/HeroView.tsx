import React from "react";
import { Hero, HeroProps } from "@nice-digital/nds-hero";
import { Button } from "@nice-digital/nds-button";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

const Cta = () => <Button variant="cta">Hello!</Button>;

const MyBreadcrumbs = (
	<Breadcrumbs>
		<Breadcrumb>Hello</Breadcrumb>
		<Breadcrumb>There</Breadcrumb>
	</Breadcrumbs>
);

const myFooter: HeroProps["footer"] = {
	elementType: "section",
	content: (
		<section aria-labelledby="new-updated">
			<h2 className="h5 mv--0 show--ib mr--d" id="new-updated">
				New&nbsp;and updated products:
			</h2>
			<ul className="list list--piped show--ib">
				<li>
					<a href="/guidance/date">
						<span className="visually-hidden">New and updated products </span>
						<span className="text-uppercase">t</span>his month
					</a>
				</li>
				<li>
					<a href="/guidance/lastmonth">
						<span className="visually-hidden">New and updated products </span>
						<span className="text-uppercase">l</span>ast month
					</a>
				</li>
				<li>
					<a href="/guidance/last6months">
						<span className="visually-hidden">
							New and updated products in the{" "}
						</span>
						<span className="text-uppercase">l</span>ast 6 months
					</a>
				</li>
			</ul>
		</section>
	)
};

const ExtraContent = (
	<>
		<h2 className="h4">Quick Links</h2>
		<ul className="list--unstyled">
			<li>
				<a href="#">One</a>
			</li>
			<li>
				<a href="#">Two</a>
			</li>
			<li>
				<a href="#">Three</a>
			</li>
		</ul>
	</>
);

export const HeroView = () => {
	return (
		<>
			<Hero
				title="This is the title"
				intro="This is a hero intro"
				actions={<Cta />}
				footer={myFooter}
				header={MyBreadcrumbs}
			>
				{ExtraContent}
			</Hero>
		</>
	);
};
