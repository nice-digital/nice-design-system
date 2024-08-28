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

type HeadingLevel = number | string | undefined;
export interface AccordionProps {
	children: ReactNode;
	className?: string;
	displayTitleAsHeading?: boolean;
	headingLevel?: HeadingLevel;
	hideLabel?: ReactNode;
	open?: boolean;
	showLabel?: string;
	title: string | number;
	variant?: keyof typeof accordionVariants;
}

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
	const buttonId = `accordion-button-${id}`;
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

	const isValidValidLevel = (level: HeadingLevel): boolean => {
		const levelAsNumber = Number(level);
		return levelAsNumber >= 2 && levelAsNumber <= 6;
	};

	const HeadingTag =
		displayTitleAsHeading && isValidValidLevel(headingLevel)
			? (`h${headingLevel}` as keyof JSX.IntrinsicElements)
			: "div";

	return (
		<div className={["accordion", className].join(" ")}>
			<HeadingTag className="accordion__heading">
				<button
					id={buttonId}
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
							<WarningIcon className="accordion__icon" aria-hidden="true" />
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
					aria-labelledby={buttonId}
				>
					{children}
				</div>
			</AccordionGroupProvider>
		</div>
	);
};

export { AccordionGroup } from "./AccordionGroup";
export { AccordionGroupContext } from "./AccordionGroupContext";
