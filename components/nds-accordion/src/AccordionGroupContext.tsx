import { createContext, useContext, type FC, ReactNode } from "react";

export interface AccordionGroupContextType {
	isGroupOpen: boolean;
}

export const AccordionGroupContext = createContext<AccordionGroupContextType>({
	isGroupOpen: false
});

export interface AccordionGroupProviderProps {
	isGroupOpen: boolean;
	children: ReactNode;
}

export const AccordionGroupProvider: FC<AccordionGroupProviderProps> = ({
	children,
	isGroupOpen
}) => {
	return (
		<AccordionGroupContext.Provider value={{ isGroupOpen }}>
			{children}
		</AccordionGroupContext.Provider>
	);
};

export const useAccordionGroup = (): AccordionGroupContextType =>
	useContext(AccordionGroupContext);
