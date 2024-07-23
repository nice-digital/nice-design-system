import { createContext, useContext, type FC, ReactNode, useState } from "react";

export interface AccordionGroupContextType {
	isGroupOpen: boolean;
	accordions: Record<string, boolean>;
	setAccordions: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export const AccordionGroupContext = createContext<AccordionGroupContextType>({
	isGroupOpen: false,
	accordions: {},
	setAccordions: () => {}
});

export interface AccordionGroupProviderProps {
	isGroupOpen: boolean;
	children: ReactNode;
}

export const AccordionGroupProvider: FC<AccordionGroupProviderProps> = ({
	children,
	isGroupOpen
}) => {
	const [accordions, setAccordions] = useState<Record<string, boolean>>({});
	return (
		<AccordionGroupContext.Provider
			value={{ isGroupOpen, accordions, setAccordions }}
		>
			{children}
		</AccordionGroupContext.Provider>
	);
};

export const useAccordionGroup = (): AccordionGroupContextType =>
	useContext(AccordionGroupContext);
