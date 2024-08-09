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
import { AccordionButton } from "./AccordionButton";

import "../scss/accordion.scss";

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

	const renderTitle = () => {
		if (headingLevel) {
			const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
			return (
				<Tag className="accordion__heading">
					<AccordionButton
						isOpen={isOpen}
						toggleAccordion={toggleAccordion}
						generatedId={generatedId}
						showLabel={showLabel}
						hideLabel={hideLabel}
						title={title}
						variant={variant}
					/>
				</Tag>
			);
		} else {
			return (
				<AccordionButton
					isOpen={isOpen}
					toggleAccordion={toggleAccordion}
					generatedId={generatedId}
					showLabel={showLabel}
					hideLabel={hideLabel}
					title={title}
					variant={variant}
				/>
			);
		}
	};

	return (
		<div className={["accordion", className].join(" ")}>
			{renderTitle()}
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
