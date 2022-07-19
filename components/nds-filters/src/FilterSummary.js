import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Tag } from "@nice-digital/nds-tag";
import RemoveIcon from "@nice-digital/icons/lib/Remove";
import "./../scss/filter-summary.scss";

export function FilterSummary({
	children,
	className,
	sorting = [],
	activeFilters = [],
	headingLevel = 2,
	...rest
}) {
	const HeadingLevel = "h" + headingLevel;

	return (
		<div className={classnames("filter-summary", className)} {...rest}>
			<div className="filter-summary__count">
				<HeadingLevel className="h5 mv--0">{children}</HeadingLevel>
			</div>
			{sorting.length > 0 && <ResultsSorting sorting={sorting} />}
			{activeFilters.length > 0 && <ResultsFilters filters={activeFilters} />}
		</div>
	);
}

const populateMethodProperty = (onClick, method, elementType) => {
	let defaultMethod = method || (elementType === "a" && "href") || "to";
	if (onClick) return "onClick";
	if (elementType === undefined) defaultMethod = "noelementtypeprovided";
	return defaultMethod;
};

const defineElementType = (onClick, elementType) => {
	let element = "a";
	if (onClick) element = "button";
	if (elementType) element = elementType;
	return element;
};

const validateElementProps = element => {
	if (element.type.displayName == "Link" && !element.props.to) {
		return "Link component missing 'TO' attribute --->";
	}
};

function ResultsFilters({ filters }) {
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
					const ElementType = defineElementType(onClick, elementType);
					const props = {
						className,
						[populateMethodProperty(onClick, method, ElementType)]: onClick
							? onClick
							: destination
					};
					return (
						<li key={label} className="filter-summary__filter">
							{validateElementProps(<ElementType {...props} />)}
							<Tag
								outline
								remove={
									<ElementType {...props}>
										<span className="visually-hidden">
											Remove {label} filter
										</span>
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
function ResultsSorting({ sorting, selectName }) {
	if (!sorting.length) return null;

	const [showButton, setShowButton] = useState(true);

	// Find default active value if it exists
	const defaultValue = sorting.find(s => s.active)?.value || "";

	// Run callback function passed in to the selected sorting option
	const handleChange = e => {
		const onSelected = sorting[e.target.selectedIndex].onSelected;
		if (typeof onSelected === "function") {
			onSelected(sorting[e.target.selectedIndex].onSelected.value);
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

const FilterType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	destination: PropTypes.string,
	onClick: PropTypes.func,
	elementType: PropTypes.elementType,
	method: PropTypes.string,
	className: PropTypes.string
});

const SortingType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	active: PropTypes.bool,
	onSelected: PropTypes.func
});

ResultsSorting.propTypes = {
	sorting: PropTypes.arrayOf(SortingType),
	selectName: PropTypes.string
};

ResultsSorting.defaultProps = {
	selectName: "s"
};

ResultsFilters.propTypes = {
	filters: PropTypes.oneOfType([PropTypes.arrayOf(FilterType), FilterType])
};

FilterSummary.propTypes = {
	sorting: PropTypes.arrayOf(SortingType),
	activeFilters: PropTypes.arrayOf(FilterType),
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	headingLevel: PropTypes.number
};

export default FilterSummary;
