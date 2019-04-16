// @flow
import React, { Component } from "react";
import "../scss/breadcrumbs.scss";

type BreadcrumbsProps = {
	title: string
};

export default class Breadcrumbs extends Component<BreadcrumbsProps> {
	render() {
		return (
			<nav aria-label="Breadcrumbs" role="navigation">
				<p className="visually-hidden" id="breadcrumb-label">
					You are here:
				</p>
				<ol
					className="breadcrumbs"
					aria-labelledby="breadcrumb-label"
					itemScope
					itemType="http://schema.org/BreadcrumbList"
				>
					<li
						className="breadcrumbs__crumb"
						itemProp="itemListElement"
						itemScope
						itemType="http://schema.org/ListItem"
					>
						<a href="https://www.nice.org.uk/" itemProp="name">
							Home
						</a>
						<meta itemProp="position" content="1" />
					</li>
					<li
						className="breadcrumbs__crumb"
						itemProp="itemListElement"
						itemScope
						itemType="http://schema.org/ListItem"
					>
						<a href="https://www.nice.org.uk/guidance" itemProp="name">
							NICE Guidance
						</a>
						<meta itemProp="position" content="2" />
					</li>
					<li
						className="breadcrumbs__crumb"
						itemProp="itemListElement"
						itemScope
						itemType="http://schema.org/ListItem"
					>
						<span itemProp="name">Population groups</span>
						<meta itemProp="position" content="3" />
					</li>
				</ol>
			</nav>
		);
	}
}
