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
// import { AccordionButton } from "./AccordionButton";

import "../scss/accordion.scss";
import { Toggle } from "./Toggle";
import WarningIcon from "@nice-digital/icons/lib/Warning";

export const accordionVariants = {
	default: "default",
	caution: "caution"
} as const;

export interface AccordionProps {
	title: string | number;
	open?: boolean;
	showLabel?: string;
	hideLabel?: ReactNode;
	className?: string;
	variant?: keyof typeof accordionVariants;
	children: ReactNode;
	headingLevel?: 2 | 3 | 4 | 5 | 6;
}

export const Accordion: FC<AccordionProps> = ({
	title,
	open = false,
	showLabel = "Show",
	hideLabel = "Hide",
	className,
	variant = "default",
	children,
	headingLevel
}) => {
	//TODO: useID to generate unique ID for aria-controls
	const id = useId();
	const generatedId = `accordion-content-${id}`;
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

	const HeadingTag = headingLevel
		? (`h${headingLevel}` as keyof JSX.IntrinsicElements)
		: "div";

	return (
		<div className={["accordion", className].join(" ")}>
			{/* {renderTitle()} */}
			<HeadingTag className="accordion__heading">
				<button
					aria-expanded={isOpen}
					aria-controls={generatedId}
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
					id={generatedId}
					className="accordion__content"
					hidden={isClient && !isOpen}
				>
					{children}
				</div>
			</AccordionGroupProvider>
		</div>
	);
};

export { AccordionGroup } from "./AccordionGroup";
export { AccordionGroupContext } from "./AccordionGroupContext";
