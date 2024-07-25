import {
	createContext,
	useContext,
	type FC,
	ReactNode,
	useState,
	useCallback,
	useMemo
} from "react";

export interface AccordionGroupContextType {
	isGroupOpen: boolean;
	accordions: Record<string, boolean>;
	registerAccordion: (id: string, initialState: boolean) => void;
	unregisterAccordion: (id: string) => void;
	setAccordionState: (id: string, isOpen: boolean) => void;
	allOpen: boolean;
	anyOpen: boolean;
	toggleAllAccordions: (isOpen: boolean) => void;
}

const defaultContextValue: AccordionGroupContextType = {
	isGroupOpen: false,
	accordions: {},
	registerAccordion: () => {},
	unregisterAccordion: () => {},
	setAccordionState: () => {},
	allOpen: false,
	anyOpen: false,
	toggleAllAccordions: () => {}
};

export const AccordionGroupContext =
	createContext<AccordionGroupContextType>(defaultContextValue);

export interface AccordionGroupProviderProps {
	isGroupOpen: boolean;
	children: ReactNode;
}

export const AccordionGroupProvider: FC<AccordionGroupProviderProps> = ({
	isGroupOpen,
	children
}) => {
	const [accordions, setAccordions] = useState<Record<string, boolean>>({});

	const registerAccordion = useCallback((id: string, initialState: boolean) => {
		setAccordions((prev) => ({ ...prev, [id]: initialState }));
	}, []);

	const unregisterAccordion = useCallback((id: string) => {
		setAccordions((prev) => {
			const { [id]: _, ...rest } = prev;
			return rest;
		});
	}, []);

	const setAccordionState = useCallback((id: string, isOpen: boolean) => {
		setAccordions((prev) => ({ ...prev, [id]: isOpen }));
	}, []);

	const toggleAllAccordions = useCallback((isOpen: boolean) => {
		setAccordions((prev) => {
			const updatedAccordions = Object.keys(prev).reduce((acc, key) => {
				acc[key] = isOpen;
				return acc;
			}, {} as Record<string, boolean>);
			return updatedAccordions;
		});
	}, []);

	const allOpen = useMemo(
		() => Object.values(accordions).every((isOpen) => isOpen),
		[accordions]
	);
	const anyOpen = useMemo(
		() => Object.values(accordions).some((isOpen) => isOpen),
		[accordions]
	);

	const contextValue = useMemo(
		() => ({
			isGroupOpen,
			accordions,
			registerAccordion,
			unregisterAccordion,
			setAccordionState,
			allOpen,
			anyOpen,
			toggleAllAccordions
		}),
		[
			isGroupOpen,
			accordions,
			registerAccordion,
			unregisterAccordion,
			setAccordionState,
			allOpen,
			anyOpen,
			toggleAllAccordions
		]
	);

	return (
		<AccordionGroupContext.Provider value={contextValue}>
			{children}
		</AccordionGroupContext.Provider>
	);
};

export const useAccordionGroupContext = () => useContext(AccordionGroupContext);
