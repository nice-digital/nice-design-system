import React from "react";
import PropTypes from "prop-types";

import "./../scss/stacked-nav.scss";

export const StackedNav = props => {
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
};

StackedNav.propTypes = {};

StackedNav.defaultProps = {};

export default StackedNav;
