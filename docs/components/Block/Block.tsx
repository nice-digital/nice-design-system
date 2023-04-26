// Just a coloured block! Useful for demonstrating sizes etc.

import React from "react";
import styles from "./Block.module.scss";

export interface BlockProps {
	width: string;
}

export const Block = ({ width }: BlockProps) => (
	<span className={`${styles.block} ${styles[width]}`}></span>
);
