import { useEffect, useState, type FC, type ReactNode } from "react";
import {
	AccordionGroupProvider,
	useAccordionGroup
} from "./AccordionGroupContext";
import { Toggle } from "./Toggle";

import "./../scss/accordionGroup.scss";

export const useIsClient = (): boolean => {
	const [isClient, setClient] = useState(false);

	useEffect(() => {
		setClient(true);
	}, []);

	return isClient;
};

export interface AccordionGroupProps {
	children?: ReactNode;
	toggleText?: (isOpen: boolean) => ReactNode;
	onToggle?: (isOpen: boolean) => void;
}

const defaultToggleTextFn = (isOpen: boolean) =>
	`${isOpen ? "Hide" : "Show"} all sections`;

export const AccordionGroup: FC<AccordionGroupProps> = ({
	children,
	toggleText = defaultToggleTextFn,
	onToggle
}) => {
	const [isGroupOpen, setIsGroupOpen] = useState(false);
	const isClient = useIsClient();
	const { accordions } = useAccordionGroup();
	const toggleClickHandler = () => {
		setIsGroupOpen((isGroupOpen) => !isGroupOpen);
	};

	useEffect(() => {
		if (onToggle) onToggle(isGroupOpen);
	}, [onToggle, isGroupOpen]);

	// useEffect(() => {
	// console.log("useEffect triggered by accordions changing");
	// Check if any accordion is open
	// const anyOpen = Object.values(accordions).some((isOpen) => isOpen);
	// Set the group toggle text based on the open state of any accordion
	// setIsGroupOpen(anyOpen);
	// }, [accordions]);

	return (
		<AccordionGroupProvider isGroupOpen={isGroupOpen}>
			{isClient ? (
				<button
					type="button"
					aria-expanded={isGroupOpen}
					className={"accordionGroup__toggleButton"}
					data-tracking={
						isGroupOpen ? "Hide all sections" : "Show all sections"
					}
					onClick={toggleClickHandler}
				>
					<Toggle isOpen={isGroupOpen}>
						{toggleText(isGroupOpen)} BUTTON!!!
					</Toggle>
				</button>
			) : null}
			<>{children}</>
		</AccordionGroupProvider>
	);
};
