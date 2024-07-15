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
	<span className={classNames(className, "TODO .label")}>
		<ChevronDownIcon
			className={classNames("TODO .icon", { ["TODO .open"]: isOpen })}
		/>
		{children}
	</span>
);
