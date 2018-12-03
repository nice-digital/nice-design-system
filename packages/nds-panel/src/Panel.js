// @flow
import React, { Component } from "react";

type PanelProps = {
	title: string
};

export default class Panel extends Component<PanelProps> {
	render() {
		return <div className="panel">
			panel
		</div>;
	}
}
