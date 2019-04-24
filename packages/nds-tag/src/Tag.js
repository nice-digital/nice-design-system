// @flow
import React, { Component } from "react";
import "./../scss/tag.scss";

type TagProps = {
	title: string
};

export default class Tag extends Component<TagProps> {
	render() {
		return <div className="tag">
			tag
		</div>;
	}
}
