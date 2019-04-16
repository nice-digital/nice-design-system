// @flow
import React, { Component } from "react";
import "../scss/page-header.scss";

type PageHeaderProps = {
	title: string
};

export default class PageHeader extends Component<PageHeaderProps> {
	render() {
		return (
			<div className="page-header">
				<h1 className="page-header__heading">Page title</h1>
				<p className="page-header__lead">
					Use a concise explanation of what the page is about
				</p>
				<p className="page-header__cta">
					<a href="#">A link</a>
				</p>
			</div>
		);
	}
}
