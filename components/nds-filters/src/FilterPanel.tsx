import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import ChevronDown from "@nice-digital/icons/lib/ChevronDown";

import "./../scss/filter-panel.scss";

export interface FilterPanelProps {
	[prop: string]: unknown;
	children: React.ReactNode;
	className?: string;
	heading: string;
	fallback?: {
		action?: string;
		method?: "GET" | "POST";
	};
	innerRef?: React.RefObject<HTMLFormElement>;
	onSubmit?: React.FormEventHandler;
	headingLevel?: 2 | 3 | 4 | 5;
}

export const FilterPanel: React.FC<FilterPanelProps> = (
	props: FilterPanelProps
) => {
	const {
		heading = "Filter",
		children,
		className,
		fallback,
		onSubmit,
		headingLevel = 2,
		innerRef,
		...rest
	} = props;

	const [isExpanded, setIsExpanded] = useState(true);
	const [canUseDOM, setCanUseDOM] = useState(false);

	useEffect(() => {
		setCanUseDOM(true);
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsExpanded(!isExpanded);
	};

	const HeadingLevel = `h${headingLevel}` as keyof JSX.IntrinsicElements;

	const clonedChildren = React.Children.map(children, (child: any) => {
		if (React.isValidElement(child as React.ReactElement)) {
			const childName: string =
				child.displayName ||
				child.name ||
				(child.type || {}).displayName ||
				"Component";

			const clonedChild =
				childName == "FilterGroup" || childName == "FilterByInput"
					? React.cloneElement(child, { headingLevel: headingLevel + 1 })
					: child;

			return clonedChild;
		}
	});

	return (
		<form onSubmit={onSubmit} {...fallback} {...rest} ref={innerRef}>
			<div className={classnames(["filter-panel", className])}>
				<HeadingLevel className="filter-panel__heading">
					<button
						aria-expanded={isExpanded}
						aria-controls="filter-panel-body"
						onClick={handleClick}
						type="button"
					>
						<ChevronDown
							className={classnames([
								"filter-panel__heading-icon",
								isExpanded && "filter-panel__heading-icon--expanded"
							])}
						/>
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
};

export default FilterPanel;
