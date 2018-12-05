// @flow
import React, { Component } from "react";
import "./../scss/panel.scss";

type PanelProps = {
	children: React.Node
};

export default class Panel extends Component<PanelProps> {
	render() {
		return <div className="panel">
			{this.props.children}
		</div>;
	}
}
