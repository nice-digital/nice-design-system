import React, {
	SyntheticEvent,
	useEffect,
	useState,
	useId,
	type FC,
	type ReactNode
} from "react";

import {
	useAccordionGroup,
	AccordionGroupProvider
} from "./AccordionGroupContext";

import { useIsClient } from "./useIsClient";

import "../scss/accordion.scss";
import { Toggle } from "./Toggle";
import WarningIcon from "@nice-digital/icons/lib/Warning";

export const accordionVariants = {
	default: "default",
	caution: "caution"
} as const;

export interface BaseAccordionProps {
	children: ReactNode;
	className?: string;
	hideLabel?: ReactNode;
	open?: boolean;
	showLabel?: string;
	title: string | number;
	variant?: keyof typeof accordionVariants;
}
export interface HeadingAccordionProps extends BaseAccordionProps {
	displayTitleAsHeading: true;
	headingLevel: 2 | 3 | 4 | 5 | 6;
}

export interface NonHeadingAccordionProps extends BaseAccordionProps {
	displayTitleAsHeading?: false;
	headingLevel?: never;
}

export type AccordionProps = HeadingAccordionProps | NonHeadingAccordionProps;

export const Accordion: FC<AccordionProps> = ({
	children,
	className,
	displayTitleAsHeading = false,
	headingLevel,
	hideLabel = "Hide",
	open = false,
	showLabel = "Show",
	title,
	variant = "default"
}) => {
	const id = useId();
	const titleId = `accordion-title-${id}`;
	const contentId = `accordion-content-${id}`;
	const [isOpen, setIsOpen] = useState(open);
	const { isGroupOpen } = useAccordionGroup();

	const isClient = useIsClient();

	// Handle the group being expanded/collapsed
	useEffect(() => {
		setIsOpen(isGroupOpen);
	}, [isGroupOpen]);

	// Handle the prop changing
	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	const possibleVariants = Object.keys(accordionVariants);
	if (variant && !possibleVariants.some((m) => m === variant)) {
		throw new Error(
			`Expected variant to be one of '${possibleVariants.join(
				"', '"
			)}' but found '${variant}'`
		);
	}

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	const HeadingTag = displayTitleAsHeading
		? (`h${headingLevel}` as keyof JSX.IntrinsicElements)
		: "div";

	return (
		<div className={["accordion", className].join(" ")}>
			<HeadingTag className="accordion__heading">
				<button
					aria-expanded={isOpen}
					aria-controls={contentId}
					onClick={toggleAccordion}
					data-tracking={isOpen ? hideLabel : showLabel}
					className="accordion__summary"
					type="button"
				>
					<Toggle isOpen={isOpen} className={"accordion__toggleLabel"}>
						{isOpen ? hideLabel : showLabel}
					</Toggle>{" "}
					<span className="accordion__title">
						{variant === "caution" && (
							<WarningIcon className="accordion__icon" />
						)}
						{title}
					</span>
				</button>
			</HeadingTag>
			{/* Avoid accordion groups opening nested accordions */}
			<AccordionGroupProvider isGroupOpen={false}>
				<div
					id={contentId}
					className="accordion__content"
					hidden={isClient && !isOpen}
					aria-labelledby={titleId}
				>
					{children}
				</div>
			</AccordionGroupProvider>
		</div>
	);
};

export { AccordionGroup } from "./AccordionGroup";
export { AccordionGroupContext } from "./AccordionGroupContext";
