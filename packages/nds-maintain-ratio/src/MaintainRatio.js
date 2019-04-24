// @flow
import React, { Component } from "react";
import "../scss/maintain-ratio.scss";

type MaintainRatioProps = {
	title: string
};

export default class MaintainRatio extends Component<MaintainRatioProps> {
	render() {
		return (
			<div className="maintain-ratio maintain-ratio--16-9">
				<iframe
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					allowFullScreen
				/>
			</div>
		);
	}
}
