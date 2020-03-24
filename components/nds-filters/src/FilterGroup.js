import React, { Component } from "react";
import PropTypes from "prop-types";

import { slugify } from "@nice-digital/nds-core/es/utils";

import "./../scss/filter-panel.scss";

export class FilterGroup extends Component {
	constructor(props) {
		super(props);

		const { collapseByDefault = false, selectedCount } = this.props;

		this.state = {
			isExpanded: selectedCount > 0 || !collapseByDefault,
			canUseDOM: false
		};

		this.handleTitleClick = this.handleTitleClick.bind(this);
	}

	componentDidMount() {
		this.setState({ canUseDOM: true });
	}

	handleTitleClick(e) {
		e.preventDefault();

		this.setState(prevState => ({
			isExpanded: !prevState.isExpanded
		}));
	}

	render() {
		const { selectedCount, id, heading, children } = this.props,
			{ isExpanded } = this.state,
			groupId = id || slugify(heading);

		let numSelected = null;
		if (selectedCount > 0) {
			numSelected = (
				<span className="filter-group__count">{selectedCount} selected</span>
			);
		}

		const groupHeadingElement = (
			<>
				<span id={`group-heading-${groupId}`}>{heading}</span>
				{numSelected}
			</>
		);

		const clonedChildren = React.Children.map(children, child => {
			return React.cloneElement(child, {
				name,
				groupId,
				groupHeading: heading
			});
		});

		return (
			<div className="filter-group">
				<h3 className="filter-group__heading">
					{this.state.canUseDOM ? (
						<button
							type="button"
							aria-expanded={isExpanded}
							aria-controls={`group-${groupId}`}
							onClick={this.handleTitleClick}
						>
							{groupHeadingElement}
						</button>
					) : (
						<>{groupHeadingElement}</>
					)}
				</h3>
				<fieldset
					id={`group-${groupId}`}
					aria-hidden={!isExpanded}
					className="filter-group__options"
				>
					<legend>{heading}</legend>
					{clonedChildren}
				</fieldset>
			</div>
		);
	}
}

FilterGroup.propTypes = {
	heading: PropTypes.string.isRequired,
	id: PropTypes.string,
	selectedCount: PropTypes.number.isRequired,
	collapseByDefault: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

FilterGroup.defaultProps = {};

export default FilterGroup;
