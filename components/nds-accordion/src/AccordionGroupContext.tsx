import {
	createContext,
	useContext,
	type FC,
	ReactNode,
	useState,
	useEffect
} from "react";

export interface AccordionGroupContextType {
	isGroupOpen: boolean;
	accordions: Record<string, boolean>;
	setAccordions: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
	allOpen: boolean;
	anyOpen: boolean;
}

export const AccordionGroupContext = createContext<AccordionGroupContextType>({
	isGroupOpen: false,
	accordions: {},
	setAccordions: () => {},
	allOpen: false,
	anyOpen: false
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
	const [anyOpen, setAnyOpen] = useState(false);
	const [allOpen, setAllOpen] = useState(false);

	useEffect(() => {
		const anyOpen = Object.values(accordions).some((isOpen) => isOpen);
		isGroupOpen = anyOpen;
		const allOpen = Object.values(accordions).every((isOpen) => isOpen);
		setAnyOpen(anyOpen);
		setAllOpen(allOpen);
	}, [accordions]);
	return (
		<AccordionGroupContext.Provider
			value={{ isGroupOpen, accordions, setAccordions, allOpen, anyOpen }}
		>
			{children}
		</AccordionGroupContext.Provider>
	);
};

export const useAccordionGroup = (): AccordionGroupContextType =>
	useContext(AccordionGroupContext);
