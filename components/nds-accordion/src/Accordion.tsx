import {
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

const supportsDetailsElement =
	typeof document === "undefined" ||
	"open" in document.createElement("details");

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
}

export const Accordion: FC<AccordionProps> = ({
	title,
	open = false,
	showLabel = "Show",
	hideLabel = "Hide",
	className,
	variant = "default",
	children
}) => {
	const [isOpen, setIsOpen] = useState(open);
	const { isGroupOpen } = useAccordionGroup();
	const summaryClickHandler = () => {
		// Fallback for IE11/other browsers not supporting details/summary natively
		if (!supportsDetailsElement) setIsOpen((wasOpen) => !wasOpen);
	};

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

	return (
		<details
			className={["accordion__details", className].join(" ")}
			onToggle={(e: SyntheticEvent<HTMLDetailsElement>) => {
				e.stopPropagation(); // Ensure event isn't passed to parent accordions
				setIsOpen(e.currentTarget.open);
			}}
			open={isOpen}
		>
			<summary
				className={"accordion__summary"}
				onClick={summaryClickHandler}
				data-tracking={isOpen ? hideLabel : showLabel}
			>
				<Toggle isOpen={isOpen} className={"accordion__toggleLabel"}>
					{isOpen ? hideLabel : showLabel}
				</Toggle>{" "}
				<span className="accordion__title">
					{variant === "caution" ? (
						<WarningIcon className="accordion__icon--caution" />
					) : null}
					<span>{title}</span>
				</span>
			</summary>
			{/* Avoid accordion groups opening nested accordions */}
			<AccordionGroupProvider isGroupOpen={false}>
				<div className="accordion__content">{children}</div>
			</AccordionGroupProvider>
		</details>
	);
};

export { AccordionGroup } from "./AccordionGroup";
export { AccordionGroupContext } from "./AccordionGroupContext";
