import {
	SyntheticEvent,
	useEffect,
	useId,
	useState,
	type FC,
	type ReactNode
} from "react";
import {
	useAccordionGroupContext,
	AccordionGroupProvider
} from "./AccordionGroupContext";
import { Toggle } from "./Toggle";
import WarningIcon from "@nice-digital/icons/lib/Warning";
import "../scss/accordion.scss";

const supportsDetailsElement =
	typeof document === "undefined" ||
	"open" in document.createElement("details");

export interface AccordionProps {
	title: ReactNode;
	open?: boolean;
	showLabel?: string;
	hideLabel?: ReactNode;
	className?: string;
	isCaution?: boolean;
	children: ReactNode;
	id?: string;
}

export const Accordion: FC<AccordionProps> = ({
	title,
	open = false,
	showLabel = "Show",
	hideLabel = "Hide",
	className,
	isCaution,
	children,
	id: propId
}) => {
	const generatedId = `accordion-${useId()}`;
	const id = propId || generatedId;
	const [isOpen, setIsOpen] = useState(open);
	const {
		isGroupOpen,
		registerAccordion,
		unregisterAccordion,
		setAccordionState
	} = useAccordionGroupContext();

	const summaryClickHandler = () => {
		// Fallback for IE11/other browsers not supporting details/summary natively
		if (!supportsDetailsElement) setIsOpen((wasOpen) => !wasOpen);
	};

	// Register this accordion in the group on mount, and unregister on unmount
	useEffect(() => {
		registerAccordion(id, isOpen);
		return () => unregisterAccordion(id);
	}, [id, isOpen, registerAccordion, unregisterAccordion]);

	// Sync with group open state
	useEffect(() => {
		setIsOpen(isGroupOpen);
	}, [isGroupOpen]);

	// Sync prop open state
	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	// Update the group context state when isOpen changes
	useEffect(() => {
		setAccordionState(id, isOpen);
	}, [isOpen, id, setAccordionState]);

	return (
		<details
			className={["accordion__details", className].join(" ")}
			onToggle={(e: SyntheticEvent<HTMLDetailsElement>) => {
				e.stopPropagation(); // Ensure event isn't passed to parent accordions
				setIsOpen(e.currentTarget.open);
			}}
			open={isOpen}
			id={id}
		>
			<summary
				className={"accordion__summary"}
				onClick={summaryClickHandler}
				data-tracking={isOpen ? hideLabel : showLabel}
			>
				<Toggle isOpen={isOpen} className={"accordion__toggleLabel"}>
					{isOpen ? hideLabel : showLabel}
				</Toggle>{" "}
				<div className="accordion__title">
					{isCaution && <WarningIcon />}
					{typeof title === "string" || typeof title === "number" ? (
						<span>{title}</span>
					) : (
						title
					)}
				</div>
			</summary>
			<AccordionGroupProvider isGroupOpen={false}>
				<div className="accordion__content">{children}</div>
			</AccordionGroupProvider>
		</details>
	);
};

export { AccordionGroup } from "./AccordionGroup";
export { AccordionGroupContext } from "./AccordionGroupContext";
