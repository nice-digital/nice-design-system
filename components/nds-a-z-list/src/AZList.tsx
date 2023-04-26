import React from "react";
import "../scss/a-z-list.scss";

export interface AZListProps {
	alphabet: React.ElementType;
	children: React.ReactNode;
	className?: string;
	[prop: string]: unknown;
}

export interface AZListItemProps {
	id?: string;
	title: string;
	children: React.ReactNode;
	className?: string;
	[prop: string]: unknown;
}

export const AZList: React.FC<AZListProps> = (props: AZListProps) => {
	const { alphabet: Alphabet, children, className, ...attrs } = props;

	return (
		<>
			<Alphabet className="a-z-list__alphabet" />
			<ol
				className={["a-z-list", className].join(" ")}
				data-component="a-z-list"
				{...attrs}
			>
				{children}
			</ol>
		</>
	);
};

export const AZListItem: React.FC<AZListItemProps> = (
	props: AZListItemProps
) => {
	const { id, title, children, className, ...attrs } = props;

	const itemId = id || title.replace(" ", "").toLowerCase();

	return (
		<li className={["a-z-list__item", className].join(" ")} {...attrs}>
			<h2 className="a-z-list__item-heading" id={itemId}>
				{title}
			</h2>
			{children}
		</li>
	);
};
