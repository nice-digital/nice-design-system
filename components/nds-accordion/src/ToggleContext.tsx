import { createContext, useContext, type FC, ReactNode, useState } from "react";

export interface AccordionToggleContextType {
	accordions: Record<string, boolean>;
	setAccordions: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export const AccordionToggleContext = createContext<AccordionToggleContextType>(
	{
		accordions: {},
		setAccordions: () => {}
	}
);

export interface AccordionToggleProviderProps {
	children: ReactNode;
}

export const AccordionToggleProvider: FC<AccordionToggleProviderProps> = ({
	children
}) => {
	const [accordions, setAccordions] = useState<Record<string, boolean>>({});
	return (
		<AccordionToggleContext.Provider value={{ accordions, setAccordions }}>
			{children}
		</AccordionToggleContext.Provider>
	);
};

export const useAccordionToggle = (): AccordionToggleContextType =>
	useContext(AccordionToggleContext);
