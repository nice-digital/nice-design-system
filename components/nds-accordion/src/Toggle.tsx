import classNames from "classnames";
import { ReactNode, type FC } from "react";

import ChevronDownIcon from "@nice-digital/icons/lib/ChevronDown";

import "./../scss/toggle.scss";

export interface ToggleProps {
	isOpen: boolean;
	className?: string;
	children: ReactNode;
}

export const Toggle: FC<ToggleProps> = ({ children, isOpen, className }) => (
	<span className={classNames(className, "toggle__label")}>
		<ChevronDownIcon
			className={classNames("toggle__icon", { ["toggle__icon--open"]: isOpen })}
		/>
		{children}
	</span>
);
