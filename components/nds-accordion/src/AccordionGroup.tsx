import {
	useEffect,
	useState,
	type FC,
	type ReactNode,
	useCallback,
	useMemo
} from "react";
import {
	AccordionGroupProvider,
	useAccordionGroupContext
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

const defaultToggleTextFn = (isOpen: boolean): string =>
	`${isOpen ? "Hide" : "Show"} all sections`;

export const AccordionGroup: FC<AccordionGroupProps> = ({
	children,
	toggleText = defaultToggleTextFn,
	onToggle
}) => {
	const [isGroupOpen, setIsGroupOpen] = useState(false);
	const { allOpen, anyOpen, toggleAllAccordions } = useAccordionGroupContext();

	useEffect(() => {
		if (allOpen) {
			setIsGroupOpen(true);
		} else if (!anyOpen) {
			setIsGroupOpen(false);
		}
	}, [allOpen, anyOpen]);

	const toggleClickHandler = useCallback(() => {
		const newIsGroupOpen = !isGroupOpen;
		setIsGroupOpen(newIsGroupOpen);
		toggleAllAccordions(newIsGroupOpen);
	}, [isGroupOpen, toggleAllAccordions]);

	useEffect(() => {
		onToggle?.(isGroupOpen);
	}, [onToggle, isGroupOpen]);

	const memoizedToggleText = useMemo(
		() => toggleText(isGroupOpen),
		[toggleText, isGroupOpen]
	);

	return (
		<AccordionGroupProvider isGroupOpen={isGroupOpen}>
			<button
				type="button"
				aria-expanded={isGroupOpen}
				className="accordionGroup__toggleButton"
				data-tracking={isGroupOpen ? "Hide all sections" : "Show all sections"}
				onClick={toggleClickHandler}
			>
				<Toggle isOpen={isGroupOpen}>{memoizedToggleText}</Toggle>
			</button>
			{children}
		</AccordionGroupProvider>
	);
};
