// @flow
import React, { Component } from "react";

type HeroProps = {
	title: string
};

export default class Hero extends Component<HeroProps> {
	render() {
		return <div className="hero">
			hero
		</div>;
	}
}
