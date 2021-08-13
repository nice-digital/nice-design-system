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
		const {
			heading = "Filter",
			children,
			className,
			fallback,
			...rest
		} = this.props;
		const { canUseDOM, isExpanded } = this.state;

		return (
			<form {...rest} {...fallback}>
				<div className={`filter-panel ${className}`}>
					<h2 className="filter-panel__heading">
						<button
							aria-expanded={isExpanded}
							aria-controls="filter-panel-body"
							onClick={this.handleClick}
						>
							{heading}
						</button>
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
			</form>
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
