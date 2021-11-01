import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { slugify } from "@nice-digital/nds-core";
import { Tab } from "./Tab";
import "./../scss/tabs.scss";
export { Tab };

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

	changeTab(index, hash) {
		this.setState({
			index: index,
			focusActiveTabButton: true
		});
		this.props.changeCallback && this.props.changeCallback(hash);
	}

	getIndexOfHashThatMatchesTab(hash) {
		const tabs = this.getTabChildElements();
		const hashIndex = tabs
			.map(tab => "#" + slugify(tab.props.title))
			.indexOf(hash);
		return hashIndex === -1 ? 0 : hashIndex;
	}

	componentDidMount() {
		this.setState({
			canUseDOM: true,
			index: this.getIndexOfHashThatMatchesTab(this.props.initialHash)
		});
	}

	handleTabButtonClick(event, index) {
		const hash = event.target.dataset.hash;
		this.changeTab(index, hash);
	}

	handleTabButtonKey(e, i) {
		let newIndex = i;

		switch (e.which) {
			case keyCodes.left:
			case keyCodes.up:
				e.preventDefault();
				newIndex--;
				if (newIndex < 0) newIndex = this.getTabChildElements().length - 1;
				break;
			case keyCodes.right:
			case keyCodes.down:
				e.preventDefault();
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

		newIndex !== i && this.changeTab(newIndex);
	}

	getTabChildElements() {
		return React.Children.toArray(this.props.children).filter(
			c => c.type === Tab
		);
	}

	render() {
		const tabs = this.getTabChildElements();

		const getTabSlug = (title, id = null) => id || slugify(title);

		const classes = classnames([
			"tabs",
			this.state.canUseDOM && "js",
			this.props.className
		]);

		const filteredProps = Object.assign({}, this.props);

		// remove from being spread on to the DOM
		delete filteredProps?.changeCallback;

		return (
			<div className={classes} {...filteredProps}>
				<ul className="tabs__list" role="tablist">
					{tabs.map((tab, i) => {
						const { title, id } = tab.props;
						const tabSlug = getTabSlug(title, id);
						const isTabActive = i === this.state.index;

						return (
							<li className="tabs__tab" key={tabSlug} role="presentation">
								<button
									className="tabs__tab-btn"
									type="button"
									role="tab"
									data-hash={tabSlug}
									id={`tab-button-${tabSlug}`}
									aria-controls={`tab-pane-${tabSlug}`}
									aria-selected={isTabActive}
									onClick={e => this.handleTabButtonClick(e, i)}
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
								{typeof children === "string" ? (
									<div dangerouslySetInnerHTML={{ __html: children }} />
								) : (
									children
								)}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

Tabs.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(Tab), Tab]).isRequired,
	changeCallback: PropTypes.func,
	initialHash: PropTypes.string,
	className: PropTypes.string
};
