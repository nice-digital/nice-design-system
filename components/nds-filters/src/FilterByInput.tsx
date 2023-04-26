import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Button } from "@nice-digital/nds-button";
import { Input } from "@nice-digital/nds-input";
import ChevronDown from "@nice-digital/icons/lib/ChevronDown";

import "./../scss/filter-input.scss";

export interface FilterByInputProps {
	[prop: string]: unknown;
	label: string;
	name: string;
	buttonLabel?: string;
	className?: string;
	collapseByDefault?: boolean;
	type?:
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "range"
		| "password"
		| "search"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week";
	inputProps?: object;
	headingLevel?: 3 | 4 | 5 | 6;
}

export const FilterByInput: React.FC<FilterByInputProps> = (
	props: FilterByInputProps
) => {
	const {
		className,
		type = "text",
		label,
		name,
		buttonLabel = "Filter",
		inputProps,
		headingLevel = 3,
		collapseByDefault = false,
		...rest
	} = props;

	const [isExpanded, setIsExpanded] = useState(!collapseByDefault);
	const [canUseDOM, setCanUseDOM] = useState(false);

	useEffect(() => {
		setCanUseDOM(true);
	}, []);

	const handleTitleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsExpanded(!isExpanded);
	};

	const HeadingLevel = `h${headingLevel}` as keyof JSX.IntrinsicElements;

	const filteredProps = Object.assign({}, ...[rest]);

	const propsToRemoveFromDom = ["collapseByDefault"];

	propsToRemoveFromDom.forEach((prop) => {
		delete filteredProps[prop];
	});

	return (
		<div
			className={classnames("inputFilterBox", className)}
			data-component="input-filter"
			{...filteredProps}
		>
			<HeadingLevel className="inputFilterBox__heading">
				{canUseDOM ? (
					<button
						type="button"
						aria-expanded={isExpanded}
						aria-controls={`inputFilter-${name}`}
						onClick={handleTitleClick}
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
};

FilterByInput.displayName = "FilterByInput";
