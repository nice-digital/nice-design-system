import React, { ReactNode } from "react";
import styles from "./Example.module.scss";

interface ExampleProps {
	children?: ReactNode;
}

export const Example = ({ children }: ExampleProps) => (
	<div className={styles.example}>{children}</div>
);
