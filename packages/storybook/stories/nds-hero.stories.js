/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";

import { Hero } from "@nice-digital/nds-hero";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

const myCallsToAction = (
	<>
		<button className="btn btn--cta">Button One</button>
		<button className="btn">Button Two</button>
	</>
);

storiesOf("Hero", module)
	.add("Title only", () => <Hero title="Page Title" />)
	.add("Title and intro", () => (
		<Hero
			title="Page Title"
			intro="This is a hero intro that should explain in a few words what the
	site is about"
		/>
	))
	.add("With Actions", () => (
		<Hero
			title="Page Title"
			intro="This is a hero intro that should explain in a few words what the
	site is about"
			actions={myCallsToAction}
		/>
	))
	.add("With extra detail / links", () => (
		<Hero
			title="Page Title"
			intro="This is a hero intro that should explain in a few words what the
	site is about"
			actions={myCallsToAction}
		>
			<h2 className="h4">Quick links</h2>
			<ul className="list list--unstyled">
				<li>
					<a href="#">Page One</a>
				</li>
				<li>
					<a href="#">Page Two</a>
				</li>
				<li>
					<a href="#">Page Three</a>
				</li>
				<li>
					<a href="#">Page Four</a>
				</li>
				<li>
					<a href="#">Page Five</a>
				</li>
				<li>
					<a href="#">Page Six</a>
				</li>
			</ul>
		</Hero>
	))
	.add("With footer", () => (
		<Hero
			title="Page Title"
			intro="This is a hero intro that should explain in a few words what the
	site is about"
			actions={myCallsToAction}
			footer={
				<section aria-labelledby="new-updated">
					<h2 className="h5 mv--0 show--ib mr--d" id="new-updated">
						New&nbsp;and updated products:
					</h2>
					<ul className="list list--piped show--ib">
						<li>
							<a href="/guidance/date">
								<span className="visually-hidden">
									New and updated products{" "}
								</span>
								<span className="text-uppercase">t</span>his month
							</a>
						</li>
						<li>
							<a href="/guidance/lastmonth">
								<span className="visually-hidden">
									New and updated products{" "}
								</span>
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
			}
		>
			<h2 className="h4">Quick links</h2>
			<ul className="list list--unstyled">
				<li>
					<a href="#">Page One</a>
				</li>
				<li>
					<a href="#">Page Two</a>
				</li>
				<li>
					<a href="#">Page Three</a>
				</li>
				<li>
					<a href="#">Page Four</a>
				</li>
				<li>
					<a href="#">Page Five</a>
				</li>
				<li>
					<a href="#">Page Six</a>
				</li>
			</ul>
		</Hero>
	))
	.add("With header", () => (
		<Hero
			title="Page Title"
			intro="This is a hero intro that should explain in a few words what the
	site is about"
			actions={myCallsToAction}
			header={
				<Breadcrumbs>
					<Breadcrumb>Link One</Breadcrumb>
					<Breadcrumb>Link Two</Breadcrumb>
				</Breadcrumbs>
			}
		>
			<h2 className="h4">Quick links</h2>
			<ul className="list list--unstyled">
				<li>
					<a href="#">Page One</a>
				</li>
				<li>
					<a href="#">Page Two</a>
				</li>
				<li>
					<a href="#">Page Three</a>
				</li>
				<li>
					<a href="#">Page Four</a>
				</li>
				<li>
					<a href="#">Page Five</a>
				</li>
				<li>
					<a href="#">Page Six</a>
				</li>
			</ul>
		</Hero>
	));
