import { useEffect, useState, type FC, type ReactNode } from "react";

import { AccordionGroupProvider } from "./AccordionGroupContext";
import { useIsClient } from "./useIsClient";
import { Toggle } from "./Toggle";

// import styles from "./AccordionGroup.module.scss";
import "./../scss/accordionGroup.scss";

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

	const toggleClickHandler = () => {
		setIsGroupOpen((isGroupOpen) => !isGroupOpen);
	};

	useEffect(() => {
		if (onToggle) onToggle(isGroupOpen);
	}, [onToggle, isGroupOpen]);

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
					<Toggle isOpen={isGroupOpen}>{toggleText(isGroupOpen)}</Toggle>
				</button>
			) : null}
			<div className="accordion-group-content">{children}</div>
		</AccordionGroupProvider>
	);
};
