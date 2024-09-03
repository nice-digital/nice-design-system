import React, { ReactNode, useState } from "react";
import { Button } from "@nice-digital/nds-button";
import styles from "./Example.module.scss";

interface ExampleProps {
	fullWidth?: boolean;
	fullWidthChildIndex?: number;
	children?: ReactNode;
}

export const Example = ({
	children,
	fullWidth,
	fullWidthChildIndex = 1
}: ExampleProps) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const childItems = React.Children.toArray(children);

	return (
		<div
			className={`${styles.example} ${
				expanded ? styles.expanded : ""
			} exclude-container`}
		>
			{childItems.map((child, index) => (
				<div key={index}>
					{index === fullWidthChildIndex && fullWidth ? (
						<>
							<Button
								variant="inverse"
								onClick={toggleExpand}
								className={styles.expandButton}
							>
								{expanded
									? "Collapse full width example"
									: "Expand full width example"}
							</Button>
							<div className={`${!expanded ? styles.fullWidthWrapper : ""}`}>
								{child}
							</div>
						</>
					) : (
						child
					)}
				</div>
			))}
		</div>
	);
};
