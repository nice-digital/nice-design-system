import React, { useEffect, useState } from "react";

import { slugify } from "@nice-digital/nds-core";

import "./../scss/filter-option.scss";

export interface FilterOptionProps {
	[prop: string]: unknown;
	groupId?: string;
	groupHeading?: string;
	isSelected: boolean;
	children: string;
	value?: string;
	onChanged: React.EventHandler<any>;
}

export const FilterOption: React.FC<FilterOptionProps> = (
	props: FilterOptionProps
) => {
	const {
		groupId,
		groupHeading,
		value,
		children,
		isSelected,
		onChanged,
		...rest
	} = props;
	const [selected, setSelected] = useState(isSelected);

	useEffect(() => {
		setSelected(isSelected);
	}, [isSelected]);

	const handleCheckboxChange = (e: React.FormEvent<HTMLInputElement>) => {
		setSelected(!selected);
		if (onChanged) {
			onChanged(e);
		}
	};

	const slugifiedValue = value ? slugify(value) : slugify(children);

	const filteredProps = Object.assign({}, ...[rest]);

	const propsToRemoveFromDom = ["isSelected", "onChanged"];

	propsToRemoveFromDom.forEach((prop) => {
		delete filteredProps[prop];
	});

	return (
		<label
			htmlFor={`filter_${groupId}_${slugifiedValue}`}
			className="filter-option"
			data-component="filter-option"
		>
			<input
				id={`filter_${groupId}_${slugifiedValue}`}
				type="checkbox"
				name={groupId}
				value={value || children}
				checked={selected}
				title={`${groupHeading} - ${children}`}
				onChange={handleCheckboxChange}
				{...filteredProps}
			/>
			<span className="filter-option__text">{children}</span>
		</label>
	);
};
