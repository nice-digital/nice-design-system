import React, { ReactNode, useState } from "react";
import { Button } from "@nice-digital/nds-button";
import styles from "./Example.module.scss";

interface ExampleProps {
	fullWidth?: boolean;
	children?: ReactNode;
}

export const Example = ({ children, fullWidth }: ExampleProps) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div
			className={`${styles.example} ${
				expanded ? styles.expanded : ""
			} exclude-container`}
		>
			{fullWidth && (
				<Button variant="inverse" onClick={toggleExpand}>
					{expanded
						? "Collapse full width example"
						: "Expand full width example"}
				</Button>
			)}
			{children}
		</div>
	);
};
