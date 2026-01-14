import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Tag } from "@nice-digital/nds-tag";
import "./../scss/filter-summary.scss";

export interface FilterSummaryProps {
	[prop: string]: unknown;
	sorting?: SortingType[];
	activeFilters?: FilterType[];
	children: React.ReactNode;
	className?: string;
	headingLevel?: 2 | 3 | 4 | 5;
}

export type SortingType = {
	label: string;
	value?: string;
	active?: boolean | undefined;
	onSelected?: React.EventHandler<any>;
};

export type FilterType = {
	label: string;
	destination?: string;
	onClick?: React.EventHandler<any>;
	elementType?: React.ElementType;
	method?: string;
	className?: string;
};

export interface ResultsSortingProps {
	sorting: SortingType[];
	selectName?: string;
}

export interface ResultsFiltersProps {
	filters: FilterType | FilterType[];
}

export const FilterSummary: React.FC<FilterSummaryProps> = ({
	children,
	className,
	sorting = [],
	activeFilters = [],
	headingLevel = 2,
	...rest
}: FilterSummaryProps) => {
	const HeadingLevel = `h${headingLevel}` as keyof JSX.IntrinsicElements;

	return (
		<div
			className={classnames("filter-summary", className)}
			data-component="filter-summary"
			{...rest}
		>
			<div className="filter-summary__count">
				<HeadingLevel className="h5 mv--0">{children}</HeadingLevel>
			</div>
			{sorting.length > 0 && <ResultsSorting sorting={sorting} />}
			{activeFilters.length > 0 && <ResultsFilters filters={activeFilters} />}
		</div>
	);
};

const populateMethodProperty = (
	onClick: React.EventHandler<any> | undefined,
	method: string | undefined,
	elementType: React.ElementType
) => {
	if (onClick) return "onClick";
	if (elementType === "a") return method || "href";
	return method || "to";
};

const defineElementType = (
	onClick: React.EventHandler<any> | undefined,
	elementType: React.ElementType
): string | React.ElementType => {
	let element: string | React.ElementType = "a";
	if (onClick) element = "button";
	if (elementType) element = elementType;
	return element;
};

const validateElementProps = (element: React.ReactElement) => {
	if (element.type == "Link" && !element.props.to) {
		return "Link component missing 'TO' attribute --->";
	}
};

function ResultsFilters({ filters }: { filters: FilterType[] }) {
	const defaultAnchorHref = "#";
	if (!filters) return null;
	return (
		<ul
			className="filter-summary__filters hide-print"
			aria-label="Active filters"
		>
			{filters.map(
				({
					label,
					destination,
					method,
					elementType,
					onClick,
					className = ""
				}) => {
					const ElementType = defineElementType(
						onClick,
						elementType as React.ElementType
					);
					const propName = populateMethodProperty(
						onClick,
						method as string,
						ElementType as React.ElementType
					);
					const propValue = onClick
						? onClick
						: ElementType === "a"
						? destination ?? defaultAnchorHref
						: destination;
					const props = {
						className,
						[propName]: propValue,
						...(ElementType === "a" && {
							onKeyDown: (e: React.KeyboardEvent<HTMLAnchorElement>) => {
								if (e.key === " ") {
									e.preventDefault();
									e.currentTarget.click();
								}
							}
						})
					};
					return (
						<li key={label} className="filter-summary__filter">
							{validateElementProps(<ElementType {...props} />)}
							<Tag
								outline
								remove={
									<ElementType {...props} aria-label={`Remove ${label} filter`}>
										x
									</ElementType>
								}
							>
								{label}
							</Tag>
						</li>
					);
				}
			)}
		</ul>
	);
}

function ResultsSorting({ sorting, selectName = "s" }: ResultsSortingProps) {
	if (!sorting.length) return null;

	const [showButton, setShowButton] = useState(true);

	// Find default active value if it exists
	const defaultValue = sorting.find((s) => s.active)?.value || "";

	// Run callback function passed in to the selected sorting option
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedIndex: number = e.target.selectedIndex;
		const onSelected = sorting[selectedIndex].onSelected;
		if (typeof onSelected === "function") {
			onSelected(e);
		}
	};

	// Hide the button for client-side apps running JS
	useEffect(() => {
		setShowButton(false);
	}, [showButton]);

	return (
		<div className="filter-summary__sorting">
			<label className="filter-summary__sort-label" htmlFor="sorting-options">
				Sort by
			</label>
			<select
				id="sorting-options"
				onChange={handleChange}
				defaultValue={defaultValue}
				className="filter-summary__select"
				name={selectName}
			>
				{sorting.map(({ label, value }, index) => {
					return (
						<option value={value} key={index}>
							{label}
						</option>
					);
				})}
			</select>

			{showButton && <button type="submit">Apply sorting</button>}
		</div>
	);
}

export default FilterSummary;
