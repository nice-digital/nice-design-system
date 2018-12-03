// @flow
import React, { Component } from "react";

type PageHeaderProps = {
	title: string
};

export default class PageHeader extends Component<PageHeaderProps> {
	render() {
		return <div className="page-header">
			Page header
		</div>;
	}
}
