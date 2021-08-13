import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "@nice-digital/nds-input";
import { Button } from "@nice-digital/nds-button";

import "./../scss/filter-input.scss";

export class FilterByInput extends Component {
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

	handleTitleClick(e) {
		e.preventDefault();

		this.setState(prevState => ({
			isExpanded: !prevState.isExpanded
		}));
	}

	render() {
		const { type = "text", label, name, ...rest } = this.props,
			{ isExpanded } = this.state;

		return (
			<div className="inputFilterBox">
				<h3 className="inputFilterBox__heading">
					{this.state.canUseDOM ? (
						<button
							type="button"
							aria-expanded={isExpanded}
							aria-controls={`inputFilter-${label}`}
							onClick={this.handleTitleClick}
						>
							{label}
						</button>
					) : (
						<>{label}</>
					)}
				</h3>
				<div
					id={`inputFilter-${label}`}
					aria-hidden={!isExpanded}
					className="inputFilterBox__controls"
				>
					<Input type={type} label={label} name={name} {...rest} />
					<Button>Filter</Button>
				</div>
			</div>
		);
	}
}

FilterByInput.propTypes = {
	inputType: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default FilterByInput;
