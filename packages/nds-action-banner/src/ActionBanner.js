// @flow
import React, { Component } from "react";

type ActionBannerProps = {
	title: string
};

export default class ActionBanner extends Component<ActionBannerProps> {
	render() {
		return <div className="action-banner">
			action banner
		</div>;
	}
}
