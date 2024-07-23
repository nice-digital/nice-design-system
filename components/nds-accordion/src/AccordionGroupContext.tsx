import { createContext, useContext, type FC, ReactNode, useState } from "react";

export interface AccordionGroupContextType {
	isGroupOpen: boolean;
	accordions: Record<string, boolean>;
	setAccordions: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
	areAllOpen: (accordions: Record<string, boolean>) => boolean;
}

export const AccordionGroupContext = createContext<AccordionGroupContextType>({
	isGroupOpen: false,
	accordions: {},
	setAccordions: () => {},
	areAllOpen: () => false
});

export interface AccordionGroupProviderProps {
	isGroupOpen: boolean;
	children: ReactNode;
}

// useEffect(() => {
// console.log("useEffect triggered by accordions changing");
// Check if any accordion is open
// const anyOpen = Object.values(accordions).some((isOpen) => isOpen);
// Set the group toggle text based on the open state of any accordion
// setIsGroupOpen(anyOpen);
// }, [accordions]);

export const areAllOpen = (accordions: Record<string, boolean>): boolean => {
	return Object.values(accordions).every((isOpen) => isOpen);
};

export const AccordionGroupProvider: FC<AccordionGroupProviderProps> = ({
	children,
	isGroupOpen
}) => {
	const [accordions, setAccordions] = useState<Record<string, boolean>>({});
	return (
		<AccordionGroupContext.Provider
			value={{ isGroupOpen, accordions, setAccordions, areAllOpen }}
		>
			{children}
		</AccordionGroupContext.Provider>
	);
};

export const useAccordionGroup = (): AccordionGroupContextType =>
	useContext(AccordionGroupContext);
