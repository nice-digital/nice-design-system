import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ChevronDown from "@nice-digital/icons/lib/ChevronDown";

import { slugify } from "@nice-digital/nds-core/es/utils";

import "./../scss/filter-group.scss";

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
		const {
				selectedCount,
				id,
				heading,
				headingLevel,
				children,
				className,
				/* eslint-disable */
				collapseByDefault, // declaring here to prevent spread of invalid attribute on to container div
				/* eslint-enable */
				...rest
			} = this.props,
			{ isExpanded } = this.state,
			groupId = id || slugify(heading);

		let numSelected = null;
		if (selectedCount > 0) {
			numSelected = (
				<span className="filter-group__count">{selectedCount} selected</span>
			);
		}

		const HeadingLevel = "h" + headingLevel;

		const groupHeadingElement = (
			<>
				<span id={`group-heading-${groupId}`}>{heading}</span>
				{numSelected}
			</>
		);

		const clonedChildren = React.Children.map(children, child => {
			return React.cloneElement(child, {
				groupId,
				groupHeading: heading
			});
		});

		return (
			<div className={classnames("filter-group", className)} {...rest}>
				<HeadingLevel className="filter-group__heading">
					{this.state.canUseDOM ? (
						<button
							type="button"
							aria-expanded={isExpanded}
							aria-controls={`group-${groupId}`}
							onClick={this.handleTitleClick}
						>
							<ChevronDown
								className={classnames([
									"filter-group__heading-icon",
									isExpanded && "filter-group__heading-icon--expanded"
								])}
							/>
							{groupHeadingElement}
						</button>
					) : (
						<>{groupHeadingElement}</>
					)}
				</HeadingLevel>
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

FilterGroup.displayName = "FilterGroup";

FilterGroup.propTypes = {
	heading: PropTypes.string.isRequired,
	id: PropTypes.string,
	selectedCount: PropTypes.number,
	collapseByDefault: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	className: PropTypes.string,
	headingLevel: PropTypes.oneOf([3, 4, 5, 6])
};

export default FilterGroup;
