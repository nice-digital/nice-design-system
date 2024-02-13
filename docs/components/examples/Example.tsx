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

	// Split the children into multiple items
	const childItems = React.Children.toArray(children);

	return (
		<div
			className={`${styles.example} ${
				expanded ? styles.expanded : ""
			} exclude-container`}
		>
			{/* Render the child items in a specific order */}
			{childItems.map((child, index) => (
				<div key={index}>
					{index === 1 && fullWidth ? (
						<Button
							variant="inverse"
							onClick={toggleExpand}
							className={styles.expandButton}
						>
							{expanded
								? "Collapse full width example"
								: "Expand full width example"}
						</Button>
					) : null}
					{child}
				</div>
			))}
		</div>
	);
};
