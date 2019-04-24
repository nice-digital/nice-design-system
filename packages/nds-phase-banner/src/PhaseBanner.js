// @flow
import React, { Component } from "react";
import "./../scss/phase-banner.scss";

type PhaseBannerProps = {
	title: string
};

export default class PhaseBanner extends Component<PhaseBannerProps> {
	render() {
		return (
			<p className="phase-banner">
				<span className="phase-banner__tag">
					<span className="tag tag--impact tag--alpha">Alpha</span>
				</span>
				<span className="phase-banner__label">
					This is a new service – your <a href="#">feedback</a> will help us to
					improve it.
				</span>
			</p>
		);
	}
}
