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

import "../scss/accordion.scss";

const supportsDetailsElement =
	typeof document === "undefined" ||
	"open" in document.createElement("details");

export enum AccordionTheme {
	Warning
}

export interface AccordionProps {
	title: ReactNode;
	open?: boolean;
	showLabel?: string;
	hideLabel?: ReactNode;
	className?: string;
	theme?: AccordionTheme;
	children: ReactNode;
}

export const Accordion: FC<AccordionProps> = ({
	title,
	open = false,
	showLabel = "Show",
	hideLabel = "Hide",
	className,
	theme,
	children
}) => {
	const [isOpen, setIsOpen] = useState(open),
		themeClass = theme === AccordionTheme.Warning ? "TODO THEME" : "",
		{ isGroupOpen } = useAccordionGroup(),
		summaryClickHandler = () => {
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

	return (
		<details
			className={["accordion__details", className, themeClass].join(" ")}
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
				{typeof title === "string" || typeof title === "number" ? (
					<span>{title}</span>
				) : (
					title
				)}
			</summary>
			{/* Avoid accordion groups opening nested accordions */}
			<AccordionGroupProvider isGroupOpen={false}>
				{children}
			</AccordionGroupProvider>
		</details>
	);
};

export { AccordionGroup } from "./AccordionGroup";
export { AccordionGroupContext } from "./AccordionGroupContext";
