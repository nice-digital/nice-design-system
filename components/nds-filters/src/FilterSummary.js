import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./../scss/filter-summary.scss";

export function FilterSummary({ children, className, sorting }) {
	return (
		<div className={classnames("filter-summary", className)}>
			{/* <div className="filter-summary__count">
				<h2 className="h5 mv--0">{children}</h2>
			</div> */}
			{sorting.length && (
				<FilterSorting
					inactive={sorting.filter(item => !item.active)}
					active={sorting.filter(item => item.active)[0]}
				/>
			)}

			{/*
			<ul
				className="filter-summary__filters hide-print"
				aria-label="Active filters"
			>
				<li className="filter-summary__filter">
					<span className="tag tag--outline">
						Evidence type: Quality Indicators
						<a href="search?q=test&amp;sp=on" className="tag__remove">
							<span className="icon icon--remove" aria-hidden="true"></span>
							<span className="visually-hidden">
								Remove Evidence type: Quality Indicators filter
							</span>
						</a>
					</span>
				</li>
			</ul> */}
		</div>
	);
}

FilterSummary.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	sorting: PropTypes.arrayOf(SortingType)
};

function FilterSorting({ active, inactive }) {
	if (!inactive.length && !active) return null;
	return (
		<p className="filter-summary__sort hide-print">
			{active && (
				<>
					<span>
						<span className="visually-hidden">Sorted by</span> {active.title}
						<span className="visually-hidden">.</span>
					</span>{" "}
					|
				</>
			)}

			{inactive.length &&
				inactive.map(({ title, to }, index) => {
					return (
						<span key={index}>
							{" "}
							<span className="visually-hidden">Sort by</span>
							<a href={to}>{title}</a> {index + 1 < inactive.length && "|"}
						</span>
					);
				})}
		</p>
	);
}

FilterSorting.propTypes = {
	active: SortingType,
	inactive: PropTypes.oneOfType([PropTypes.arrayOf(SortingType), SortingType])
};

const SortingType = {
	title: PropTypes.string,
	to: PropTypes.string,
	active: PropTypes.elementType
};
