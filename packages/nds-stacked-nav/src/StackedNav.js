// @flow
import React, { Component } from "react";
import "./../scss/stacked-nav.scss";

type StackedNavProps = {
	title: string
};

export default class StackedNav extends Component<StackedNavProps> {
	render() {
		return (
			<nav className="stacked-nav">
				<h2 className="stacked-nav__root">
					<a href="#">Root link</a>
				</h2>
				<ul className="stacked-nav__list">
					<li className="stacked-nav__list-item">
						<a href="#">Link 1</a>
					</li>
					<li className="stacked-nav__list-item">
						<a href="#" aria-current="page">
							Link 2
						</a>
					</li>
					<li className="stacked-nav__list-item">
						<a href="#">Link 3</a>
					</li>
				</ul>
			</nav>
		);
	}
}
