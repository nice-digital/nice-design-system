// @flow
import React, { Component } from "react";
import "../scss/breadcrumbs.scss";

type BreadcrumbsProps = {
	title: string
};

export default class Breadcrumbs extends Component<BreadcrumbsProps> {
	render() {
		return <div className="breadcrumbs">
			breadcrumbs
		</div>;
	}
}
