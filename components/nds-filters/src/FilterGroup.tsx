import React, { useEffect, useState } from "react";
import classnames from "classnames";
import ChevronDown from "@nice-digital/icons/lib/ChevronDown";

import { slugify } from "@nice-digital/nds-core";

import "./../scss/filter-group.scss";

export interface FilterGroupProps {
	[prop: string]: unknown;
	heading: string;
	id?: string;
	selectedCount?: number;
	collapseByDefault?: boolean;
	children: React.ReactNode;
	className?: string;
	headingLevel?: 3 | 4 | 5 | 6;
}

export const FilterGroup: React.FC<FilterGroupProps> = (
	props: FilterGroupProps
) => {
	const {
		collapseByDefault = false,
		selectedCount,
		id,
		heading,
		headingLevel = 3,
		children,
		className,
		...rest
	} = props;
	const [isExpanded, setIsExpanded] = useState(
		(selectedCount && selectedCount > 0) || !collapseByDefault
	);
	const [canUseDOM, setCanUseDOM] = useState(false);

	useEffect(() => {
		setCanUseDOM(true);
	}, []);

	const handleTitleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsExpanded(!isExpanded);
	};

	const groupId = id || slugify(heading);

	let numSelected = null;
	if (selectedCount && selectedCount > 0) {
		numSelected = (
			<span className="filter-group__count">
				<span className="visually-hidden">(</span>
				{selectedCount} selected<span className="visually-hidden">)</span>
			</span>
		);
	}

	const HeadingLevel = `h${headingLevel}` as keyof JSX.IntrinsicElements;

	const groupHeadingElement = (
		<>
			<span id={`group-heading-${groupId}`}>{heading} </span>
			{numSelected}
		</>
	);

	const clonedChildren = React.Children.map(children, (child: any) => {
		if (React.isValidElement(child as React.ReactElement)) {
			return React.cloneElement(child, {
				groupId,
				groupHeading: heading
			});
		}
	});

	const filteredProps = Object.assign({}, ...[rest]);

	const propsToRemoveFromDom = ["collapseByDefault"];

	propsToRemoveFromDom.forEach((prop) => {
		delete filteredProps[prop];
	});

	return (
		<div className={classnames("filter-group", className)} {...filteredProps}>
			<HeadingLevel className="filter-group__heading">
				{canUseDOM ? (
					<button
						type="button"
						aria-expanded={isExpanded}
						aria-controls={`group-${groupId}`}
						onClick={handleTitleClick}
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
};

FilterGroup.displayName = "FilterGroup";
