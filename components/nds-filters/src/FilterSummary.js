import React from "react";
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
			{sorting.length && (
				<ResultsSorting
					inactive={sorting.filter(item => !item.active)}
					active={sorting.filter(item => item.active)[0]}
				/>
			)}
			{activeFilters.length && <ResultsFilters filters={activeFilters} />}
		</div>
	);
}

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
					const props = {
						className: classnames(["tag__remove", className]),
						"aria-label": `Sort by ${label}`,
						[!onClick
							? method || (ElementType === "a" && "href") || "to"
							: "onClick"]: onClick ? onClick : destination
					};
					const ElementType = onClick ? "button" : elementType || "a";
					return (
						<li key={label} className="filter-summary__filter">
							<Tag outline>
								{label}
								<ElementType {...props}>
									<RemoveIcon />
									<span className="visually-hidden">Remove {label} filter</span>
								</ElementType>
							</Tag>
						</li>
					);
				}
			)}
		</ul>
	);
}

function ResultsSorting({ active, inactive }) {
	if (!inactive.length && !active) return null;
	return (
		<p className="filter-summary__sort hide-print">
			{active && (
				<>
					<span>
						<span className="visually-hidden">Sorted by</span> {active.label}
						<span className="visually-hidden">.</span>
					</span>{" "}
					|
				</>
			)}

			{inactive.length &&
				inactive.map(
					(
						{
							label,
							destination,
							method,
							elementType,
							onClick,
							className = ""
						},
						index
					) => {
						const ElementType = onClick ? "button" : elementType || "a";
						const props = {
							className: classnames([
								"filter-summary__sort-control",
								className
							]),
							"aria-label": `Sort by ${label}`,
							[!onClick
								? method || (ElementType === "a" && "href") || "to"
								: "onClick"]: onClick ? onClick : destination
						};

						return (
							<span key={index}>
								{" "}
								<ElementType {...props}>{label}</ElementType>{" "}
								{index + 1 < inactive.length && "|"}
							</span>
						);
					}
				)}
		</p>
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

const SortingType =
	// FilterType +
	PropTypes.shape({
		label: PropTypes.string.isRequired,
		destination: PropTypes.string,
		onClick: PropTypes.func,
		elementType: PropTypes.elementType,
		method: PropTypes.string,
		className: PropTypes.string,
		active: PropTypes.bool
	});

ResultsSorting.propTypes = {
	active: SortingType,
	inactive: PropTypes.arrayOf(SortingType)
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
