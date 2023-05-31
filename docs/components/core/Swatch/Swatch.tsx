// A swatch used to demonstrate a colour value

import React from "react";
import styles from "./Swatch.module.scss";

export interface SwatchProps {
	colour: string;
}

export const Swatch = ({ colour }: SwatchProps) => (
	<span className={styles.swatch} style={{ background: colour }}></span>
);
