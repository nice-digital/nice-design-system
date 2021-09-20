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
			onSubmit,
			headingLevel = 2,
			innerRef,
			...rest
		} = this.props;
		const { canUseDOM, isExpanded } = this.state;

		const HeadingLevel = "h" + headingLevel;

		const formProps = canUseDOM
			? { ...onSubmit, ...rest }
			: { ...fallback, ...rest };

		const clonedChildren = React.Children.map(children, child => {
			const clonedChild =
				child.type?.displayName == "FilterGroup" ||
				child.type?.displayName == "FilterByInput"
					? React.cloneElement(child, { headingLevel: headingLevel + 1 })
					: child;

			return clonedChild;
		});

		return (
			<form {...formProps} ref={innerRef}>
				<div className={`filter-panel ${className}`}>
					<HeadingLevel className="filter-panel__heading">
						<button
							aria-expanded={isExpanded}
							aria-controls="filter-panel-body"
							onClick={this.handleClick}
						>
							{heading}
						</button>
					</HeadingLevel>
					<div
						id="filter-panel-body"
						className="filter-panel__body"
						aria-hidden={!isExpanded}
					>
						{clonedChildren}
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
	heading: PropTypes.string.isRequired,
	fallback: PropTypes.shape({
		action: PropTypes.string,
		method: PropTypes.oneOf(["GET", "POST"]),
		getFallbackFormRef: PropTypes.func
	}),
	innerRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.any })
	]),
	onSubmit: PropTypes.func,
	headingLevel: PropTypes.oneOf([2, 3, 4, 5])
};

export default FilterPanel;
