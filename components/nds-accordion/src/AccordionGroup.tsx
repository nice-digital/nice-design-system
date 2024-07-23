import { useEffect, useState, type FC, type ReactNode } from "react";
import {
	AccordionGroupContext,
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
	const { accordions, areAllOpen, setAccordions } = useAccordionGroup();
	const toggleClickHandler = () => {
		console.log("toggleClickHandler accs", accordions);
		setIsGroupOpen((isGroupOpen) => !isGroupOpen);
		// setAccordions((prevAccordions) => ({
		// 	...prevAccordions,
		// 	[id]: !isGroupOpen
		// }));
	};

	useEffect(() => {
		if (onToggle) onToggle(isGroupOpen);
	}, [onToggle, isGroupOpen]);

	return (
		<AccordionGroupProvider isGroupOpen={isGroupOpen}>
			<AccordionGroupContext.Consumer>
				{({ isGroupOpen, areAllOpen, accordions }) => {
					return (
						<>
							{/* {isGroupOpen ? "true" : "false"} */}
							{/* {areAllOpen(accordions) ? "all are open" : "all are not open"}
							 */}

							{isClient ? (
								<button
									type="button"
									aria-expanded={areAllOpen(accordions)}
									className={"accordionGroup__toggleButton"}
									data-tracking={
										areAllOpen(accordions)
											? "Hide all sections"
											: "Show all sections"
									}
									onClick={toggleClickHandler}
									// onClick={() => {
									// 	setIsGroupOpen((isGroupOpen) => !isGroupOpen);
									// }}
								>
									<Toggle isOpen={areAllOpen(accordions)}>
										{toggleText(areAllOpen(accordions))}
									</Toggle>
								</button>
							) : null}
						</>
					);
				}}
			</AccordionGroupContext.Consumer>
			{/* {isClient ? (
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
			) : null} */}
			<>{children}</>
		</AccordionGroupProvider>
	);
};
