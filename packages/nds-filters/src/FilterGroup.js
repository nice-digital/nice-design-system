import React, { Component } from "react";
import PropTypes from "prop-types";

import "./../scss/filter-panel.scss";

export class FilterGroup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: true,
			canUseDOM: false
		};

		this.handleTitleClick = this.handleTitleClick.bind(this);
	}

	componentDidMount() {
		this.setState({ canUseDOM: true });
	}

	handleTitleClick() {
		this.setState(prevState => ({
			isExpanded: !prevState.isExpanded
		}));
	}

	render() {
		return <div className="filter-group">TODO</div>;
	}
}

FilterGroup.propTypes = {};

FilterGroup.defaultProps = {};

export default FilterGroup;
