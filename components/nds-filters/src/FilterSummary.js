import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./../scss/filter-summary.scss";

export function FilterSummary({
	children,
	className,
	sorting = [],
	activeFilters = [],
	...rest
}) {
	return (
		<div className={classnames("filter-summary", className)} {...rest}>
			<div className="filter-summary__count">
				<h2 className="h5 mv--0">{children}</h2>
			</div>
			{sorting.length && (
				<ResultsSorting
					inactive={sorting.filter(item => !item.active)}
					active={sorting.filter(item => item.active)[0]}
				/>
			)}
			{activeFilters.length && (
				<ul
					className="filter-summary__filters hide-print"
					aria-label="Active filters"
				>
					{activeFilters.map(({ title, onClick }) => {
						return (
							<li key={title} className="filter-summary__filter">
								<span className="tag tag--outline">
									{title}
									<button onClick={onClick} className="tag__remove">
										<span
											className="icon icon--remove"
											aria-hidden="true"
										></span>
										<span className="visually-hidden">
											Remove {title} filter
										</span>
									</button>
								</span>
							</li>
						);
					})}
				</ul>
			)}
		</div>
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
						{ label, to, elementType = null, onClick, className = "" },
						index
					) => {
						const props = {
							className: classnames(["filter-summary__sort-control", className])
						};
						// it("should render a 'to' attribute if the elementType is anything other than an anchor", () => {
						const ElementType = elementType ? elementType : to ? "a" : "button";

						if (to) {
							props.href = to;
							props.to = to;
						} else if (onClick) {
							props.onClick = onClick;
						}
						return (
							<span key={index}>
								{" "}
								<ElementType aria-label={`Sort by ${label}`} {...props}>
									{label}
								</ElementType>{" "}
								{index + 1 < inactive.length && "|"}
							</span>
						);
					}
				)}
		</p>
	);
}

const SortingType = PropTypes.shape({
	label: PropTypes.string,
	to: PropTypes.string,
	active: PropTypes.bool,
	onClick: PropTypes.func,
	elementType: PropTypes.element
});

ResultsSorting.propTypes = {
	active: SortingType,
	inactive: PropTypes.oneOfType([PropTypes.arrayOf(SortingType), SortingType])
};

const FilterType = PropTypes.shape({
	label: PropTypes.string,
	onClick: PropTypes.function
});

FilterSummary.propTypes = {
	children: PropTypes.string,
	activeFilters: PropTypes.arrayOf(FilterType),
	className: PropTypes.string
	// sorting:
};

export default FilterSummary;
