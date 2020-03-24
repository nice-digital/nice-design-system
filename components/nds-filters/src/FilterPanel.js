import React, { Component } from "react";
import PropTypes from "prop-types";

import "./../scss/filter-panel.scss";

export class FilterPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: true,
			canUseDOM: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({ canUseDOM: true });
	}

	handleClick(e) {
		e.preventDefault();

		this.setState(prevState => ({
			isExpanded: !prevState.isExpanded
		}));
	}

	render() {
		const { heading = "Filter", children, className } = this.props;
		const { canUseDOM, isExpanded } = this.state;

		return (
			<div className={`filter-panel ${className}`}>
				<h2 className="filter-panel__heading">
					<a
						href="#filter-panel-body"
						aria-expanded="true"
						aria-controls="filter-panel-body"
					>
						{heading}
					</a>
				</h2>
				<div
					id="filter-panel-body"
					className="filter-panel__body"
					aria-hidden={!isExpanded}
				>
					{children}
					{!canUseDOM && (
						<button type="submit" className="btn filter-panel__submit">
							Apply filters
						</button>
					)}
				</div>
			</div>
		);
	}
}

FilterPanel.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	className: PropTypes.string,
	heading: PropTypes.string
};

FilterPanel.defaultProps = {
	title: "Filter"
};

export default FilterPanel;
