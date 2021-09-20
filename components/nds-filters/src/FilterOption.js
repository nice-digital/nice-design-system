import React, { Component } from "react";
import PropTypes from "prop-types";

import { slugify } from "@nice-digital/nds-core";

import "./../scss/filter-option.scss";

export class FilterOption extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: this.props.isSelected
		};

		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			selected: nextProps.isSelected
		});
	}

	handleCheckboxChange() {
		this.setState(
			prevState => ({
				selected: !prevState.selected
			}),
			() => {
				this.props.onChanged && this.props.onChanged();
			}
		);
	}

	render() {
		const {
			groupId,
			groupHeading,
			value,
			children,
			/* eslint-disable */
			// declaring unused props to avoid spreading across the dom
			onChanged,
			isSelected,
			/* eslint-enable */
			...rest
		} = this.props;

		const { selected } = this.state;

		const slugifiedValue = value ? slugify(value) : slugify(children);

		return (
			<label
				htmlFor={`filter_${groupId}_${slugifiedValue}`}
				className="filter-option"
				{...rest}
			>
				<input
					id={`filter_${groupId}_${slugifiedValue}`}
					type="checkbox"
					name={groupId}
					value={value || children}
					checked={selected}
					title={`${groupHeading} - ${children}`}
					onChange={this.handleCheckboxChange}
				/>
				<span className="filter-option__text">{children}</span>
			</label>
		);
	}
}

FilterOption.propTypes = {
	groupId: PropTypes.string,
	groupHeading: PropTypes.string,
	isSelected: PropTypes.bool.isRequired,
	children: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChanged: PropTypes.func
};
