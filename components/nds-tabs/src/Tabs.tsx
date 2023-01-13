import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { slugify } from "@nice-digital/nds-core";
import { Tab } from "./Tab";
import "./../scss/tabs.scss";
export { Tab };

export interface TabsProps {
	[prop: string]: unknown;
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	onTabChange?(hash: string): void;
}

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

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
	const [index, setIndex] = useState(0);
	const [canUseDOM, setCanUseDOM] = useState(false);
	const [focusActiveTabButton, setFocusActiveTabButton] = useState(false);

	const { children, className, onTabChange, ...rest } = props;

	useEffect(() => {
		const hash = document?.location?.hash || null;
		setCanUseDOM(true);
		setIndex(getIndexOfHashThatMatchesTab(hash));
	}, []);

	const changeTab = (index: number, hash?: string) => {
		setIndex(index);
		setFocusActiveTabButton(true);
		onTabChange && hash && onTabChange(hash);
	};

	const getIndexOfHashThatMatchesTab = (hash: string | null) => {
		if (!hash) return 0;
		const tabs = getTabChildElements();
		const hashIndex = tabs
			// document.location.hash returns the # character with it
			.map((tab) => {
				const thisTab = tab as React.ReactElement;
				return "#" + slugify(thisTab.props.title);
			})
			.indexOf(hash);
		return hashIndex === -1 ? 0 : hashIndex;
	};

	const handleTabButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>,
		index: number
	) => {
		const target = event.target;
		if (target instanceof HTMLButtonElement) {
			const hash = target.dataset.hash;
			changeTab(index, hash);
		}
	};

	const handleTabButtonKey = (
		e: React.KeyboardEvent<HTMLButtonElement>,
		i: number
	) => {
		let newIndex = i;

		switch (e.which) {
			case keyCodes.left:
			case keyCodes.up:
				e.preventDefault();
				newIndex--;
				if (newIndex < 0) newIndex = getTabChildElements().length - 1;
				break;
			case keyCodes.right:
			case keyCodes.down:
				e.preventDefault();
				newIndex++;
				if (newIndex >= getTabChildElements().length) newIndex = 0;
				break;
			case keyCodes.home:
				newIndex = 0;
				break;
			case keyCodes.end:
				newIndex = getTabChildElements().length - 1;
				break;
			default:
				break;
		}

		newIndex !== i && changeTab(newIndex);
	};

	const getTabChildElements = () => {
		return React.Children.toArray(children).filter((c) => {
			const childElement = c as React.ReactElement;
			return childElement.type === Tab;
		});
	};

	const tabs = getTabChildElements();

	const getTabSlug = (title: string, id = null) => id || slugify(title);

	const classes = classnames(["tabs", canUseDOM && "js", className]);

	const filteredProps = Object.assign({}, props);

	// remove from being spread on to the DOM
	delete filteredProps?.onTabChange;
	delete filteredProps?.className;

	return (
		<div className={classes} {...filteredProps}>
			<ul className="tabs__list" role="tablist">
				{tabs.map((tab, i) => {
					const tabElement = tab as React.ReactElement;
					const { title, id } = tabElement.props;
					const tabSlug = getTabSlug(title, id);
					const isTabActive = i === index;

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
								onClick={(e) => handleTabButtonClick(e, i)}
								onKeyDown={(e) => handleTabButtonKey(e, i)}
								ref={(btn) => {
									focusActiveTabButton && isTabActive && btn && btn.focus();
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
					const tabElement = tab as React.ReactElement;
					const { children, title, id, ...rest } = tabElement.props;
					const tabSlug = getTabSlug(title, id);
					const isTabActive = i === index;
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
};
