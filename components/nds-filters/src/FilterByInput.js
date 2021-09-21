import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Button } from "@nice-digital/nds-button";
import { Input } from "@nice-digital/nds-input";
import ChevronDown from "@nice-digital/icons/lib/ChevronDown";

import "./../scss/filter-input.scss";

export class FilterByInput extends Component {
	constructor(props) {
		super(props);

		const { collapseByDefault = false } = this.props;

		this.state = {
			isExpanded: !collapseByDefault,
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
				className,
				type = "text",
				label,
				name,
				buttonLabel = "Filter",
				inputProps,
				headingLevel,
				/* eslint-disable */
				collapseByDefault, // declaring here to prevent spread of invalid attribute on to container div
				/* eslint-enable */
				...rest
			} = this.props,
			{ isExpanded } = this.state;

		const HeadingLevel = "h" + headingLevel;

		return (
			<div className={classnames("inputFilterBox", className)} {...rest}>
				<HeadingLevel className="inputFilterBox__heading">
					{this.state.canUseDOM ? (
						<button
							type="button"
							aria-expanded={isExpanded}
							aria-controls={`inputFilter-${name}`}
							onClick={this.handleTitleClick}
						>
							<ChevronDown
								className={classnames([
									"filter-group__heading-icon",
									isExpanded && "filter-group__heading-icon--expanded"
								])}
							/>
							{label}
						</button>
					) : (
						<>{label}</>
					)}
				</HeadingLevel>
				<div
					id={`inputFilter-${name}`}
					aria-hidden={!isExpanded}
					className="inputFilterBox__controls"
				>
					<Input type={type} label={label} name={name} {...inputProps} />
					<Button type="submit" className="ml--0 mb--0">
						{buttonLabel}
					</Button>
				</div>
			</div>
		);
	}
}

FilterByInput.displayName = "FilterByInput";

FilterByInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string,
	className: PropTypes.string,
	collapseByDefault: PropTypes.bool,
	type: PropTypes.string,
	inputProps: PropTypes.any,
	headingLevel: PropTypes.oneOf([3, 4, 5, 6])
};

export default FilterByInput;
