import React, { Component } from "react";
import PropTypes from "prop-types";
import { slugify } from "@nice-digital/nds-core/es/utils";
import { Tab } from "./Tab";
export { Tab };
import "./../scss/tabs.scss";

export const keyCodes = {
	enter: 13,
	space: 32,
	end: 35,
	home: 36,
	/**
	 * Code for the left key (37)
	 * @type Number
	 */
	left: 37,
	up: 38,
	right: 39,
	down: 40
};

export class Tabs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			/**
			 * The 0-based index of the active tab
			 *
			 * @type number
			 */
			index: 0,
			canUseDOM: false,
			/**
			 * Whether to move focus to the active tab button
			 *
			 * @type boolean
			 */
			focusActiveTabButton: false
		};
	}

	componentDidMount() {
		this.setState({ canUseDOM: true });
	}

	handleTabButtonClick(index) {
		this.setState({
			index: index,
			focusActiveTabButton: true
		});
	}

	handleTabButtonKey(e, i) {
		let newIndex = i;

		switch (e.which) {
			case keyCodes.left:
			case keyCodes.up:
				newIndex--;
				if (newIndex < 0) newIndex = this.getTabChildElements().length - 1;
				break;
			case keyCodes.right:
			case keyCodes.down:
				newIndex++;
				if (newIndex >= this.getTabChildElements().length) newIndex = 0;
				break;
			case keyCodes.home:
				newIndex = 0;
				break;
			case keyCodes.end:
				newIndex = this.getTabChildElements().length - 1;
				break;
			default:
				break;
		}

		newIndex != i &&
			this.setState({
				index: newIndex,
				focusActiveTabButton: true
			});
	}

	getTabChildElements() {
		return React.Children.toArray(this.props.children).filter(
			c => c.type == Tab
		);
	}

	render() {
		const tabs = this.getTabChildElements();

		const getTabSlug = (title, id = null) => id || slugify(title);

		return (
			<div
				className={`tabs${this.state.canUseDOM ? " js" : ""}`}
				{...this.props}
			>
				<ul className="tabs__list" role="tablist">
					{tabs.map((tab, i) => {
						const { title, id, ...rest } = tab.props;
						const tabSlug = getTabSlug(title, id);
						const isTabActive = i === this.state.index;

						return (
							<li className="tabs__tab" key={tabSlug} role="presentation">
								<button
									className="tabs__tab-btn"
									type="button"
									role="tab"
									id={`tab-button-${tabSlug}`}
									aria-controls={`tab-pane-${tabSlug}`}
									aria-selected={isTabActive}
									onClick={() => this.handleTabButtonClick(i)}
									onKeyDown={e => this.handleTabButtonKey(e, i)}
									ref={btn => {
										this.state.focusActiveTabButton &&
											isTabActive &&
											btn &&
											btn.focus();
									}}
								>
									{title}
								</button>
							</li>
						);
					})}
				</ul>
				<div className="tabs__content">
					{tabs.map((tab, i) => {
						const { children, title, id, ...rest } = tab.props;
						const tabSlug = getTabSlug(title, id);
						const isTabActive = i === this.state.index;
						return (
							<div
								className="tabs__pane"
								key={tabSlug}
								role="tabpanel"
								id={`tab-pane-${tabSlug}`}
								aria-labelledby={`tab-button-${tabSlug}`}
								aria-hidden={!isTabActive}
								{...rest}
							>
								{children}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

Tabs.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(Tab), Tab]).isRequired
};
