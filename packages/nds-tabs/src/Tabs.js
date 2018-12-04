// @flow
import React, { Component } from "react";
import { slugify } from "@nice-digital/nds-core/es/utils";
import Tab from "./Tab";
import "./../scss/tabs.scss";

const keyCodes = {
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

export type TabsProps = {
	children: React.ChildrenArray<React.Element<typeof Tab>>
};

export type TabsState = {
	index: number,
	canUseDOM: boolean
};

/**
 * Tabs component
 *
 * @class Tabs
 * @extends {Component<TabsProps, TabsState>}
 */
class Tabs extends Component<TabsProps, TabsState> {

	constructor(props: TabsProps) {
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

		this.handleTabButtonClick = this.handleTabButtonClick.bind(this);
		this.handleTabKey = this.handleTabButtonKey.bind(this);
	}

	componentDidMount() {
		this.setState({ canUseDOM: true });
	}

	handleTabButtonClick(index: number) {
		this.setState({
			index: index,
			focusActiveTabButton: true
		});
	}

	handleTabButtonKey(e, i: number) {
		let newIndex = i;

		switch(e.which) {
			case keyCodes.left:
			case keyCodes.up:
				newIndex--;
				if(newIndex < 0)
					newIndex = this.getTabChildElements().length - 1;
				break;
			case keyCodes.right:
			case keyCodes.down:
				newIndex++;
				if(newIndex >= this.getTabChildElements().length)
					newIndex = 0;
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

		newIndex != i && this.setState({
			index: newIndex,
			focusActiveTabButton: true
		});
	}

	getTabChildElements() {
		return React.Children.toArray(this.props.children)
			.filter(c => c.type == Tab);
	}

	render() {
		const tabs = this.getTabChildElements();

		const getTabSlug = (title, id: ?string = null) => id || slugify(title);

		return (
			<div className={`tabs ${ this.state.canUseDOM ? "js" : null }`}>
				<ul className="tabs__list" role="tablist">
					{
						tabs.map((tab, i) => {
							const tabSlug: string = getTabSlug(tab.props.title, tab.props.id);
							const isTabActive: boolean = i === this.state.index;
							return (
								<li className="tabs__tab"
									key={tabSlug}
									role="presentation">
									<button className="tabs__tab-btn"
										type="button"
										role="tab"
										id={`tab-button-${tabSlug}`}
										aria-controls={`tab-pane-${tabSlug}`}
										aria-selected={isTabActive}
										onClick={() => this.handleTabButtonClick(i)}
										onKeyDown={(e) => this.handleTabButtonKey(e, i)}
										ref={(btn) => { this.state.focusActiveTabButton && isTabActive && btn && btn.focus(); }}>
										{ tab.props.title }
									</button>
								</li>
							);
						})
					}
				</ul>
				<div className="tabs__content">
					{
						tabs.map((tab, i) => {
							const tabSlug: string = getTabSlug(tab.props.title, tab.props.id);
							const isTabActive: boolean = i === this.state.index;
							return (
								<div className="tabs__pane"
									key={tabSlug}
									role="tabpanel"
									id={`tab-pane-${tabSlug}`}
									aria-labelledby={`tab-button-${tabSlug}`}
									aria-hidden={!isTabActive}>
									{tab.props.children}
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export {
	Tabs as default,
	Tab
};
