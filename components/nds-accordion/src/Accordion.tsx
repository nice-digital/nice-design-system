import React, {
	SyntheticEvent,
	useEffect,
	useState,
	type FC,
	type ReactNode
} from "react";

import {
	useAccordionGroup,
	AccordionGroupProvider
} from "./AccordionGroupContext";
import { Toggle } from "./Toggle";

import WarningIcon from "@nice-digital/icons/lib/Warning";

import "../scss/accordion.scss";

export const accordionVariants = {
	default: "default",
	caution: "caution"
} as const;

export interface AccordionProps {
	title: ReactNode;
	open?: boolean;
	showLabel?: string;
	hideLabel?: ReactNode;
	className?: string;
	variant?: keyof typeof accordionVariants;
	children: ReactNode;
	displayTitleAsHeading?: boolean;
	headingLevel?: number;
}

export const Accordion: FC<AccordionProps> = ({
	title,
	open = false,
	showLabel = "Show",
	hideLabel = "Hide",
	className,
	variant = "default",
	children,
	displayTitleAsHeading = false,
	headingLevel
}) => {
	const [isOpen, setIsOpen] = useState(open);
	const { isGroupOpen } = useAccordionGroup();

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

	const Heading = ({
		displayTitleAsHeading,
		headingLevel,
		variant,
		title
	}: {
		displayTitleAsHeading: boolean;
		headingLevel: number | undefined;
		variant: keyof typeof accordionVariants;
		title: ReactNode;
	}) => {
		const HeadingTag =
			displayTitleAsHeading && headingLevel ? `h${headingLevel}` : "p";

		return React.createElement(
			HeadingTag,
			null,
			<>
				{variant === "caution" && <WarningIcon className="warning-icon" />}
				{title}
			</>
		);
	};

	return (
		<div className={["accordion__details", className].join(" ")}>
			<div className="accordion__title">
				<button
					aria-expanded={isOpen}
					aria-controls="accordion-content"
					onClick={toggleAccordion}
					data-tracking={isOpen ? hideLabel : showLabel}
					className="accordion__summary"
				>
					<Toggle isOpen={isOpen} className={"accordion__toggleLabel"}>
						{isOpen ? hideLabel : showLabel}
					</Toggle>
					<Heading
						displayTitleAsHeading={displayTitleAsHeading}
						headingLevel={headingLevel}
						variant={variant}
						title={title}
					/>
				</button>
			</div>
			{/* Avoid accordion groups opening nested accordions */}
			<AccordionGroupProvider isGroupOpen={false}>
				<div
					id="accordion-content"
					className="accordion__content"
					hidden={!isOpen}
				>
					{children}
				</div>
			</AccordionGroupProvider>
		</div>
	);
};

export { AccordionGroup } from "./AccordionGroup";
export { AccordionGroupContext } from "./AccordionGroupContext";

// import {
// 	SyntheticEvent,
// 	useEffect,
// 	useState,
// 	type FC,
// 	type ReactNode
// } from "react";

// import {
// 	useAccordionGroup,
// 	AccordionGroupProvider
// } from "./AccordionGroupContext";
// import { Toggle } from "./Toggle";

// import WarningIcon from "@nice-digital/icons/lib/Warning";

// import "../scss/accordion.scss";

// const supportsDetailsElement =
// 	typeof document === "undefined" ||
// 	"open" in document.createElement("details");

// export const accordionVariants = {
// 	default: "default",
// 	caution: "caution"
// } as const;

// export interface AccordionProps {
// 	title: ReactNode;
// 	open?: boolean;
// 	showLabel?: string;
// 	hideLabel?: ReactNode;
// 	className?: string;
// 	variant?: keyof typeof accordionVariants;
// 	children: ReactNode;
// }

// export const Accordion: FC<AccordionProps> = ({
// 	title,
// 	open = false,
// 	showLabel = "Show",
// 	hideLabel = "Hide",
// 	className,
// 	variant = "default",
// 	children
// }) => {
// 	const [isOpen, setIsOpen] = useState(open);
// 	const { isGroupOpen } = useAccordionGroup();
// 	const summaryClickHandler = () => {
// 		// Fallback for IE11/other browsers not supporting details/summary natively
// 		if (!supportsDetailsElement) setIsOpen((wasOpen) => !wasOpen);
// 	};

// 	// Handle the group being expanded/collapsed
// 	useEffect(() => {
// 		setIsOpen(isGroupOpen);
// 	}, [isGroupOpen]);

// 	// Handle the prop changing
// 	useEffect(() => {
// 		setIsOpen(open);
// 	}, [open]);

// 	const possibleVariants = Object.keys(accordionVariants);
// 	if (variant && !possibleVariants.some((m) => m === variant)) {
// 		throw new Error(
// 			`Expected variant to be one of '${possibleVariants.join(
// 				"', '"
// 			)}' but found '${variant}'`
// 		);
// 	}

// 	return (
// 		<details
// 			className={["accordion__details", className].join(" ")}
// 			onToggle={(e: SyntheticEvent<HTMLDetailsElement>) => {
// 				e.stopPropagation(); // Ensure event isn't passed to parent accordions
// 				setIsOpen(e.currentTarget.open);
// 			}}
// 			open={isOpen}
// 		>
// 			<summary
// 				className={"accordion__summary"}
// 				onClick={summaryClickHandler}
// 				data-tracking={isOpen ? hideLabel : showLabel}
// 			>
// 				<Toggle isOpen={isOpen} className={"accordion__toggleLabel"}>
// 					{isOpen ? hideLabel : showLabel}
// 				</Toggle>{" "}
// 				<div className="accordion__title">
// 					{variant === "caution" ? <WarningIcon /> : null}
// 					{typeof title === "string" || typeof title === "number" ? (
// 						<span>{title}</span>
// 					) : (
// 						title
// 					)}
// 				</div>
// 			</summary>
// 			{/* Avoid accordion groups opening nested accordions */}
// 			<AccordionGroupProvider isGroupOpen={false}>
// 				<div className="accordion__content">{children}</div>
// 			</AccordionGroupProvider>
// 		</details>
// 	);
// };

// export { AccordionGroup } from "./AccordionGroup";
// export { AccordionGroupContext } from "./AccordionGroupContext";
