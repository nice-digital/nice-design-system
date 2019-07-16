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

	handleClick() {
		this.setState(prevState => ({
			isExpanded: !prevState.isExpanded
		}));
	}

	render() {
		const { title, children, className } = this.props;
		const { canUseDOM, isExpanded } = this.state;

		return (
			<div className={`filter-panel ${className}`}>
				{canUseDOM ? (
					<button
						type="button"
						className="filter-panel__heading"
						aria-expanded={isExpanded}
						aria-controls="filter-panel-body"
						onClick={this.handleClick}
					>
						{title}
					</button>
				) : (
					<h2 className="filter-panel__heading">{title}</h2>
				)}
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
	title: PropTypes.node
};

FilterPanel.defaultProps = {
	title: "Filter"
};

export default FilterPanel;
