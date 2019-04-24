// @flow
import React, { Component } from "react";

type FilterPanelProps = {
	title: string
};

export class FilterPanel extends Component<FilterPanelProps> {
	// TODO: Proper render method
	render() {
		return (
			<div className="filter-panel">
				<button
					type="button"
					className="filter-panel__heading"
					aria-expanded="true"
					aria-controls="filter-panel-body"
				>
					Filter
				</button>
				<div
					id="filter-panel-body"
					className="filter-panel__body"
					aria-hidden={false}
				>
					{this.props.children}
				</div>
			</div>
		);
	}
}

type FilterGroupProps = {
	title: string
};

export class FilterGroup extends Component<FilterGroupProps> {
	// TODO: Proper render method
	render() {
		return (
			<div className="filter-group">
				<button
					type="button"
					aria-expanded="true"
					aria-controls="group-ProductType"
					className="filter-group__heading"
				>
					<div id="group-title-ProductType">Product type</div>
				</button>
			</div>
		);
	}
}
