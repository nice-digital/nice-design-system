import React, { FC, ReactNode, SyntheticEvent } from "react";
import { Toggle } from "./Toggle";
import WarningIcon from "@nice-digital/icons/lib/Warning";
import { accordionVariants } from "./Accordion";

export interface AccordionButtonProps {
	isOpen: boolean;
	toggleAccordion: (e: SyntheticEvent<HTMLButtonElement>) => void;
	generatedId: string;
	showLabel: string;
	hideLabel: ReactNode;
	title: ReactNode;
	variant?: keyof typeof accordionVariants;
}

export const AccordionButton: FC<AccordionButtonProps> = ({
	isOpen,
	toggleAccordion,
	generatedId,
	showLabel,
	hideLabel,
	title,
	variant = "default"
}) => {
	/*NOTE: We get an axe related error here, but it's a false positive.
 		currently we are using axe-core but isn't compatable with React
 		There is axe-core/react but it doesn't support React 18
 	*/
	return (
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
				{variant === "caution" && <WarningIcon className="accordion__icon" />}
				{title}
			</span>
		</button>
	);
};
