// @flow
import React, { Component } from "react";

type CardProps = {
	id: ?string,
	title: string
};

export default class Card extends Component<CardProps> {
	render() {
		return <div className="card">
			card
		</div>;
	}
}
